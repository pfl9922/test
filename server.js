const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Data file path
const DATA_FILE = path.join(__dirname, 'data', 'championship.json');

// Initialize data file
async function initializeData() {
    try {
        await fs.mkdir(path.join(__dirname, 'data'), { recursive: true });
        try {
            await fs.access(DATA_FILE);
        } catch {
            const initialData = {
                drivers: [],
                races: [],
                season: '2026-2027',
                adminPassword: process.env.ADMIN_PASSWORD || 'ferrari2026' // Change this!
            };
            await fs.writeFile(DATA_FILE, JSON.stringify(initialData, null, 2));
        }
    } catch (error) {
        console.error('Error initializing data:', error);
    }
}

// Read data
async function readData() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return { drivers: [], races: [], season: '2026-2027' };
    }
}

// Write data
async function writeData(data) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data:', error);
    }
}

// Calculate standings
function calculateStandings(drivers, races) {
    const standings = drivers.map(driver => {
        const driverRaces = races.filter(r => r.driverId === driver.id);
        const totalPoints = driverRaces.reduce((sum, race) => sum + race.points, 0);
        const racesCompleted = driverRaces.length;
        const avgPoints = racesCompleted > 0 ? totalPoints / racesCompleted : 0;

        return {
            id: driver.id,
            name: driver.name,
            points: totalPoints,
            racesCompleted,
            avgPoints: parseFloat(avgPoints.toFixed(1))
        };
    });

    return standings.sort((a, b) => b.points - a.points);
}

// PUBLIC API ENDPOINTS

// Get current standings
app.get('/api/standings', async (req, res) => {
    const data = await readData();
    const standings = calculateStandings(data.drivers, data.races);
    res.json({
        standings,
        totalRaces: data.races.length > 0 ? Math.max(...data.races.map(r => r.raceNumber)) : 0,
        season: data.season
    });
});

// Get race history
app.get('/api/races', async (req, res) => {
    const data = await readData();
    const racesWithNames = data.races.map(race => {
        const driver = data.drivers.find(d => d.id === race.driverId);
        return {
            ...race,
            driverName: driver ? driver.name : 'Unknown'
        };
    });
    res.json(racesWithNames.sort((a, b) => b.raceNumber - a.raceNumber));
});

// ADMIN API ENDPOINTS

// Middleware to check admin password
function checkAdminAuth(req, res, next) {
    const password = req.headers['x-admin-password'] || req.body.password;
    
    readData().then(data => {
        if (password === data.adminPassword) {
            next();
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    });
}

// Admin login verification
app.post('/api/admin/verify', async (req, res) => {
    const { password } = req.body;
    const data = await readData();
    
    if (password === data.adminPassword) {
        res.json({ success: true });
    } else {
        res.status(401).json({ error: 'Invalid password' });
    }
});

// Get all drivers (admin)
app.get('/api/admin/drivers', checkAdminAuth, async (req, res) => {
    const data = await readData();
    res.json(data.drivers);
});

// Add driver (admin)
app.post('/api/admin/drivers', checkAdminAuth, async (req, res) => {
    const { name } = req.body;
    
    if (!name) {
        return res.status(400).json({ error: 'Driver name is required' });
    }

    const data = await readData();
    const newDriver = {
        id: Date.now().toString(),
        name,
        createdAt: new Date().toISOString()
    };
    
    data.drivers.push(newDriver);
    await writeData(data);
    
    res.json(newDriver);
});

// Delete driver (admin)
app.delete('/api/admin/drivers/:id', checkAdminAuth, async (req, res) => {
    const { id } = req.params;
    const data = await readData();
    
    data.drivers = data.drivers.filter(d => d.id !== id);
    data.races = data.races.filter(r => r.driverId !== id);
    
    await writeData(data);
    res.json({ success: true });
});

// Add race result (admin)
app.post('/api/admin/races', checkAdminAuth, async (req, res) => {
    const { driverId, raceNumber, position, points, raceName } = req.body;
    
    if (!driverId || !raceNumber || !position || points === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = await readData();
    const newRace = {
        id: Date.now().toString(),
        driverId,
        raceNumber: parseInt(raceNumber),
        position: parseInt(position),
        points: parseInt(points),
        raceName: raceName || `Race ${raceNumber}`,
        createdAt: new Date().toISOString()
    };
    
    data.races.push(newRace);
    await writeData(data);
    
    res.json(newRace);
});

// Delete race result (admin)
app.delete('/api/admin/races/:id', checkAdminAuth, async (req, res) => {
    const { id } = req.params;
    const data = await readData();
    
    data.races = data.races.filter(r => r.id !== id);
    await writeData(data);
    
    res.json({ success: true });
});

// Reset season (admin)
app.post('/api/admin/reset', checkAdminAuth, async (req, res) => {
    const data = await readData();
    data.races = [];
    await writeData(data);
    res.json({ success: true });
});

// Serve admin page
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Initialize and start server
initializeData().then(() => {
    app.listen(PORT, () => {
        console.log(`Ferrari Championship server running on http://localhost:${PORT}`);
        console.log(`Admin panel: http://localhost:${PORT}/admin`);
        console.log(`Default admin password: ferrari2026`);
    });
});

# Ferrari Club of America - Southwest GoKart Championship

A professional championship tracking system with public standings display and secure admin panel.

## Features

### Public Frontend (`/`)
- Live championship standings
- Driver rankings with total points, races completed, and averages
- Auto-refreshes every 30 seconds
- Podium highlighting (Gold, Silver, Bronze)
- Ferrari-themed racing aesthetics
- Fully responsive design

### Admin Panel (`/admin`)
- Password-protected access
- Add/remove drivers
- Record race results (race number, position, points)
- View complete race history
- Delete individual race results
- Reset season (clears all race data)

## Installation

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Access the application**
   - Public Standings: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin
   - Default admin password: `ferrari2026`

## Admin Password

**IMPORTANT:** Change the default password before deploying!

To change the admin password:
1. Open `data/championship.json` (created after first run)
2. Change the `adminPassword` field
3. Restart the server

## Data Storage

All data is stored in `data/championship.json`:
- Driver information
- Race results
- Season configuration
- Admin credentials

**Backup this file regularly to prevent data loss!**

## File Structure

```
ferrari-championship/
├── server.js              # Express server & API
├── package.json           # Node.js dependencies
├── public/
│   ├── index.html        # Public standings page
│   └── admin.html        # Admin control panel
└── data/
    └── championship.json # Data storage (auto-created)
```

## API Endpoints

### Public Endpoints
- `GET /api/standings` - Get current standings
- `GET /api/races` - Get race history

### Admin Endpoints (require password)
- `POST /api/admin/verify` - Verify admin password
- `GET /api/admin/drivers` - Get all drivers
- `POST /api/admin/drivers` - Add new driver
- `DELETE /api/admin/drivers/:id` - Delete driver
- `POST /api/admin/races` - Add race result
- `DELETE /api/admin/races/:id` - Delete race result
- `POST /api/admin/reset` - Reset season

## Usage

### Adding Drivers
1. Go to admin panel
2. Enter driver name
3. Click "Add Driver"

### Recording Race Results
1. Enter race number (e.g., 1, 2, 3...)
2. Optional: Enter race name (e.g., "Phoenix Grand Prix")
3. Select driver from dropdown
4. Enter finishing position
5. Enter points earned
6. Click "Record Result"

### Points System
You can use any points system you prefer. Common examples:
- F1 Style: 25, 18, 15, 12, 10, 8, 6, 4, 2, 1
- Simple: 10, 8, 6, 4, 2, 1
- Custom: Define your own

## Production Deployment

For production use:
1. Change admin password
2. Use environment variables for sensitive data
3. Set up HTTPS
4. Consider using a proper database (PostgreSQL, MongoDB)
5. Implement regular backups
6. Add rate limiting for security

## Support

For issues or questions, contact the Ferrari Club of America Southwest Region.

---

**Forza Ferrari! 🏁**

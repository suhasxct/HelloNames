# Hello Names

Hello Names is a simple full-stack web application that allows users to submit names and view a list of all submitted names in real time.  
---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- In-memory data storage

---

## Project Structure
hello-names/
├── VantaHireFrontEnd/ # React + Vite frontend
├── VantaHireBackEnd/ # Node.js + Express backend
├── README.md
└── .gitignore

---

## How to Run the Backend

```bash
cd VantaHireBackEnd
npm install
node index.js
```
The backend server will start at:
```
http://localhost:3000
```
Available API Endpoints

 - POST /api/names – Add a new name

 - GET /api/names – Fetch all stored names

- DELETE /api/names – Clear all names


# How to Run the Frontend
```
cd VantaHireFrontEnd
npm install
npm run dev
```
The frontend will be available at:
```
http://localhost:5173
```

# Environment Variables

The frontend uses a Vite environment variable for the API base URL.

Create a .env file inside VantaHireFrontEnd/:
```
VITE_API_URL=http://localhost:5000/api
```

 - Note: .env files are intentionally excluded from version control.

| Service  | Port |
| -------- | ---- |
| Backend  | 5000 |
| Frontend | 5173 |

## Assumptions & Notes

 - Data is stored in memory, not in a database
   (refreshing the backend resets all data).

 - No authentication or authorization is implemented.

 - The backend validates input defensively and does not rely solely on frontend validation.

 - The project prioritizes simplicity and clarity over advanced abstractions.

## Optional Future Improvements

 - Persist data using a database (PostgreSQL, MongoDB, etc.)

 - Add pagination or search for large name lists

 - Auto-dismiss toast notifications

 - Add unit tests for API endpoints

 - Deploy frontend and backend to a cloud platform



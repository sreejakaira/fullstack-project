# MERN Task Manager

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a modern UI and comprehensive task management capabilities.

## Features

- 📝 Create, read, update, and delete tasks
- 🔍 Search tasks by title or description
- 🏷️ Filter tasks by status (pending, in-progress, completed)
- 📱 Responsive design for all devices
- 🎨 Modern and intuitive user interface
- ⚡ Real-time updates
- 🔒 Secure API endpoints

## Tech Stack

### Frontend
- React 18
- React Router v6
- JavaScript
- Tailwind CSS
- Bootstrap 5
- Axios
- Lucide React (for icons)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance
- npm or yarn

### Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Installation

1. Clone the repository:
```bash
git clone (https://github.com/sreejakaira/fullstack-project)
cd mern-task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
# Start frontend development server
npm run dev

# Start backend server
npm run server

# Start both frontend and backend with hot-reload
npm run dev:server
```

The application will be available at `http://localhost:5173`

## Project Structure

```
mern-task-manager/
├── src/                    # Frontend source files
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── services/         # API services
│   └── types/            # TypeScript types
├── server/                # Backend source files
│   ├── controllers/      # Route controllers
│   ├── models/          # MongoDB models
│   └── routes/          # API routes
└── public/               # Static files
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/tasks | Get all tasks |
| GET    | /api/tasks/:id | Get a specific task |
| POST   | /api/tasks | Create a new task |
| PUT    | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Documentation](https://react.dev)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Express.js Documentation](https://expressjs.com)
- [Node.js Documentation](https://nodejs.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)

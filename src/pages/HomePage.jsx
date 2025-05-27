import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, PlusCircle, Info } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">Welcome to Task Manager</h1>
            <p className="lead text-muted">
              A full-stack MERN application to manage your tasks efficiently
            </p>
          </div>
          
          <div className="row g-4 py-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center task-card">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4 mt-3">
                    <ClipboardList size={48} className="text-primary" />
                  </div>
                  <h3 className="card-title h5">View Tasks</h3>
                  <p className="card-text text-muted flex-grow-1">
                    Browse, filter, and manage all your existing tasks in one place.
                  </p>
                  <Link to="/tasks" className="btn btn-outline-primary mt-3">
                    View Tasks
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center task-card">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4 mt-3">
                    <PlusCircle size={48} className="text-success" />
                  </div>
                  <h3 className="card-title h5">Create New Task</h3>
                  <p className="card-text text-muted flex-grow-1">
                    Add a new task with title, description, and status tracking.
                  </p>
                  <Link to="/tasks/create" className="btn btn-outline-success mt-3">
                    Create Task
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center task-card">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4 mt-3">
                    <Info size={48} className="text-info" />
                  </div>
                  <h3 className="card-title h5">About</h3>
                  <p className="card-text text-muted flex-grow-1">
                    Learn more about this application and how it was built.
                  </p>
                  <Link to="/about" className="btn btn-outline-info mt-3">
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-muted">
              Built with React, Node.js, Express, and MongoDB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
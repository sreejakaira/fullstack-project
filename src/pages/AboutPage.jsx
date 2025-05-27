import React from 'react';
import { Github, Code, Database, Server } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">About Task Manager</h1>
              
              <p className="lead text-center mb-5">
                A full-stack MERN application for managing tasks efficiently
              </p>
              
              <h2 className="h4 mb-3">Technology Stack</h2>
              <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <Code size={40} className="text-primary mb-3" />
                      <h3 className="h5">Frontend</h3>
                      <ul className="list-unstyled">
                        <li>React</li>
                        <li>React Router</li>
                        <li>Bootstrap</li>
                        <li>Axios</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <Server size={40} className="text-success mb-3" />
                      <h3 className="h5">Backend</h3>
                      <ul className="list-unstyled">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="h4 mb-3">Features</h2>
              <ul className="list-group list-group-flush mb-5">
                <li className="list-group-item">Create, read, update, and delete tasks</li>
                <li className="list-group-item">Filter tasks by status</li>
                <li className="list-group-item">Search tasks by title or description</li>
                <li className="list-group-item">Responsive design for all devices</li>
                <li className="list-group-item">RESTful API architecture</li>
              </ul>
              
              <div className="text-center">
                <p className="mb-3">
                  <Github size={24} className="me-2" />
                  <span>View the source code on GitHub</span>
                </p>
                <p className="text-muted">
                  Created with <span className="text-danger">♥</span> using the MERN stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
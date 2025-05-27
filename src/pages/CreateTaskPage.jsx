import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TaskForm from '../components/TaskForm';
import { createTask } from '../services/taskService';

const CreateTaskPage = () => {
  const handleSubmit = async (taskData) => {
    await createTask(taskData);
  };

  return (
    <div className="container">
      <div className="mb-4">
        <Link to="/tasks" className="btn btn-outline-primary">
          <ArrowLeft size={18} className="me-1" /> Back to Tasks
        </Link>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <TaskForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPage;
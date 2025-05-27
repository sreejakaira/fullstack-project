import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { getTask, deleteTask } from '../services/taskService';

const TaskDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        const data = await getTask(id);
        setTask(data);
        setError('');
      } catch (err) {
        setError('Failed to fetch task details. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    if (!id || !window.confirm('Are you sure you want to delete this task?')) return;
    
    try {
      await deleteTask(id);
      navigate('/tasks');
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error(err);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-warning';
      case 'in-progress':
        return 'bg-info';
      case 'completed':
        return 'bg-success';
      default:
        return 'bg-secondary';
    }
  };

  if (isLoading) {
    return (
      <div className="container">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading task details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <Link to="/tasks" className="btn btn-outline-primary">
          <ArrowLeft size={18} className="me-1" /> Back to Tasks
        </Link>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="container">
        <div className="alert alert-warning" role="alert">
          Task not found.
        </div>
        <Link to="/tasks" className="btn btn-outline-primary">
          <ArrowLeft size={18} className="me-1" /> Back to Tasks
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="mb-4">
        <Link to="/tasks" className="btn btn-outline-primary">
          <ArrowLeft size={18} className="me-1" /> Back to Tasks
        </Link>
      </div>
      
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-4">
            <h1 className="card-title h3">{task.title}</h1>
            <span className={`badge ${getStatusBadgeClass(task.status)}`}>
              {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
            </span>
          </div>
          
          <div className="mb-4">
            <h5 className="card-subtitle mb-2 text-muted">Description</h5>
            <p className="card-text">
              {task.description || 'No description provided.'}
            </p>
          </div>
          
          <div className="mb-4">
            <h5 className="card-subtitle mb-2 text-muted">Details</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Created</span>
                <span>{new Date(task.createdAt).toLocaleString()}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Status</span>
                <span className={`badge ${getStatusBadgeClass(task.status)}`}>
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>ID</span>
                <span className="text-muted">{task._id}</span>
              </li>
            </ul>
          </div>
          
          <div className="d-flex justify-content-end">
            <Link to={`/tasks/edit/${task._id}`} className="btn btn-outline-secondary me-2">
              <Edit size={18} className="me-1" /> Edit
            </Link>
            <button onClick={handleDelete} className="btn btn-outline-danger">
              <Trash2 size={18} className="me-1" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailPage;
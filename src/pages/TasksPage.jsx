import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Search, RefreshCw } from 'lucide-react';
import TaskCard from '../components/TaskCard';
import { getAllTasks, deleteTask } from '../services/taskService';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const data = await getAllTasks();
      setTasks(data);
      setFilteredTasks(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch tasks. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    let result = tasks;
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(task => task.status === statusFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        task => 
          task.title.toLowerCase().includes(term) || 
          (task.description && task.description.toLowerCase().includes(term))
      );
    }
    
    setFilteredTasks(result);
  }, [searchTerm, statusFilter, tasks]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTask(id);
        setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
        setError('');
      } catch (err) {
        setError('Failed to delete task. Please try again.');
        console.error(err);
      }
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Tasks</h1>
        <Link to="/tasks/create" className="btn btn-primary">
          <PlusCircle size={18} className="me-1" /> New Task
        </Link>
      </div>
      
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="col-md-2">
              <button 
                className="btn btn-outline-secondary w-100" 
                onClick={fetchTasks}
              >
                <RefreshCw size={18} className="me-1" /> Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      {isLoading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading tasks...</p>
        </div>
      ) : filteredTasks.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredTasks.map(task => (
            <div className="col" key={task._id}>
              <TaskCard task={task} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <p className="text-muted mb-3">No tasks found</p>
          <Link to="/tasks/create" className="btn btn-primary">
            <PlusCircle size={18} className="me-1" /> Create your first task
          </Link>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
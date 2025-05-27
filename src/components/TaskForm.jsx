import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, X } from 'lucide-react';

const TaskForm = ({ initialData, onSubmit, isEditing = false }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description || '');
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      await onSubmit({
        title,
        description,
        status
      });
      navigate('/tasks');
    } catch (err) {
      setError('Failed to save task. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-4">{isEditing ? 'Edit Task' : 'Create New Task'}</h2>
        
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              className="form-select"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => navigate('/tasks')}
              disabled={isSubmitting}
            >
              <X size={18} className="me-1" /> Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              <Save size={18} className="me-1" />
              {isSubmitting ? 'Saving...' : 'Save Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Eye } from 'lucide-react';

const TaskCard = ({ task, onDelete }) => {
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

  return (
    <div className="card task-card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title">{task.title}</h5>
          <span className={`badge ${getStatusBadgeClass(task.status)}`}>
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
        </div>
        <p className="card-text text-muted">
          {task.description?.length > 100
            ? `${task.description.substring(0, 100)}...`
            : task.description}
        </p>
        <p className="card-text">
          <small className="text-muted">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </small>
        </p>
      </div>
      <div className="card-footer bg-transparent border-top-0">
        <div className="d-flex justify-content-between">
          <Link to={`/tasks/${task._id}`} className="btn btn-sm btn-outline-primary">
            <Eye size={16} className="me-1" /> View
          </Link>
          <div>
            <Link to={`/tasks/edit/${task._id}`} className="btn btn-sm btn-outline-secondary me-1">
              <Edit size={16} className="me-1" /> Edit
            </Link>
            <button
              onClick={() => onDelete(task._id)}
              className="btn btn-sm btn-outline-danger"
            >
              <Trash2 size={16} className="me-1" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
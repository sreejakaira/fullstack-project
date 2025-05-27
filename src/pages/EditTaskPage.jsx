import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TaskForm from '../components/TaskForm';
import { getTask, updateTask } from '../services/taskService';

const EditTaskPage = () => {
  const { id } = useParams();
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
        setError('Failed to fetch task. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (taskData) => {
    if (!id) return;
    await updateTask(id, taskData);
  };

  if (isLoading) {
    return (
      <div className="container">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading task...</p>
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

  return (
    <div className="container">
      <div className="mb-4">
        <Link to="/tasks" className="btn btn-outline-primary">
          <ArrowLeft size={18} className="me-1" /> Back to Tasks
        </Link>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {task ? (
            <TaskForm initialData={task} onSubmit={handleSubmit} isEditing={true} />
          ) : (
            <div className="alert alert-warning">Task not found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;
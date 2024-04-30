import React, { useState } from 'react';
import './index.css';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) {
      setError('Please enter a valid task.');
      return;
    }
    addTask(taskText, assignedTo);
    
    setTaskText('');
    setAssignedTo('');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
      />
      <input
        className="assigned-to-input"
        type="text"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        placeholder="Assigned To"
      />
      <button type="submit" className="add-task-btn">Add Task</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default TaskForm;

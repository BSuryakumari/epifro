
import React from 'react';
import './index.css';

const TaskList = ({ tasks, updateTaskStatus }) => {
  const handleStatusUpdate = (taskId, status) => {
    updateTaskStatus(taskId, status);
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.status}`}>
          <span className="task-text">{task.text}</span> - Assigned to: <span className="assigned-to">{task.assignedTo}</span>
          <div className="task-actions">
            <button onClick={() => handleStatusUpdate(task.id, 'start')}>Start</button>
            <button onClick={() => handleStatusUpdate(task.id, 'end')}>End</button>
            <button onClick={() => handleStatusUpdate(task.id, 'complete')}>Complete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

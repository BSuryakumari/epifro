import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText, assignedTo) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      assignedTo: assignedTo,
      status: 'pending', 
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId, status) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Task List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default App;

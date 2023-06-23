import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    // Generate a unique ID for the new task
    newTask.id = Date.now();

    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);

    const updatedTasks = [...tasks];

    updatedTasks[taskIndex] = updatedTask;

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

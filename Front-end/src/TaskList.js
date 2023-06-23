import React, { useState } from "react";
import TaskUpdateForm from "./TaskUpdateForm";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleUpdate = (taskId) => {
    // Find the task in the tasks array based on the taskId
    const taskToUpdate = tasks.find((task) => task.id === taskId);

    // Set the selectedTask state to open the update form and pass the task object
    setSelectedTask(taskToUpdate);
  };

  const handleFormClose = () => {
    // Clear the selectedTask state to close the update form
    setSelectedTask(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>Name:</strong> {task.name}
          <br />
          <strong>Description:</strong> {task.description}
          <br />
          <strong>Due Date:</strong> {task.dueDate}
          <br />
          <strong>Status:</strong> {task.status}
          <br />
          <button onClick={() => handleUpdate(task.id)}>Update</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}

      {selectedTask && (
        <TaskUpdateForm
          task={selectedTask}
          updateTask={updateTask}
          onClose={handleFormClose}
        />
      )}
    </ul>
  );
};

export default TaskList;

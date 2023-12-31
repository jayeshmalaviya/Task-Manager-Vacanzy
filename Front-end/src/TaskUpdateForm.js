import React, { useState, useEffect } from "react";

const TaskUpdateForm = ({ task, updateTask, onClose }) => {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
    onClose();
  };

  useEffect(() => {
    setUpdatedTask({ ...task });
  }, [task]);

  return (
    <div className="update-form">
      <h3>Update Task</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={updatedTask.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={updatedTask.dueDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={updatedTask.status}
            onChange={handleChange}
          >
            <option value="todo">Todo</option>
            <option value="on-going">On-going</option>
            <option value="on-hold">On-hold</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default TaskUpdateForm;

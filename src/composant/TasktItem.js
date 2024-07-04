import React, { useState } from 'react';

const TaskItem = ({ task, index, updateTask, deleteTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(task.name);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTask(index, { ...task, name: updatedName, description: updatedDescription });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button type="submit">Mettre à jour</button>
        </form>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
          <button onClick={() => toggleComplete(index)}>
            {task.isCompleted ? 'Marquer comme non terminé' : 'Marquer comme terminé'}
          </button>
          <button onClick={() => deleteTask(index)}>Supprimer</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;

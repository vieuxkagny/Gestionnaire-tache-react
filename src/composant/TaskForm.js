import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addTask({ name, description, isCompleted: false });
      setName('');
      setDescription('');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Ajouter Tâche</button>
    </form>
  );
};

export default TaskForm;

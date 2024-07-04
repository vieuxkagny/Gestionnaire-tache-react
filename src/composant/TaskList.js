import React from 'react';
import TaskItem from './TasktItem';

const TaskList = ({ tasks, updateTask, deleteTask, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;

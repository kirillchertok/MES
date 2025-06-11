import React, { useState } from "react";

export const Task1 = () => {
  const [tasks, setTasks] = useState<Array<string>>([]);
  const [newTask, setNewTask] = useState<string>("");

  const writeTask = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTask(e.target.value);

  const addTask = () => setTasks([...tasks, newTask]);

  return (
    <>
      <h1>Todo List</h1>
      <h2>Ваши задачи:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <h2>Добавить новую:</h2>
      <input type="text" value={newTask} onChange={writeTask} />
      <button onClick={addTask}>Добавить</button>
    </>
  );
};

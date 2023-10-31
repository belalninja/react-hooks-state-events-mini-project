import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [cat, setCat] = useState("All");
  const [taskDeleted, setTaskDeleted] = useState("");

  function onTaskFormSubmit(data) {
    if (data.text !== "") setTaskList([...taskList, data]);
  }

  const list = taskList
    .filter((task) => task.text !== taskDeleted)
    .filter((task) => {
      if (cat === "All") return true;
      else return task.category === cat;
    });
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} setCat={setCat} category={cat} />
      <NewTaskForm
        CATEGORIES={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        setTaskList={setTaskList}
        tasks={list}
        taskDeleted={taskDeleted}
        setTaskDeleted={setTaskDeleted}
        taskList={taskList}
      />
    </div>
  );
}

export default App;

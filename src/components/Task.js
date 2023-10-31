import React from "react";

function Task({
  text,
  category,
  setTaskDeleted,
  setTaskList,
  taskList,
  taskDeleted,
}) {
  function handleDeleteClick() {
    setTaskDeleted(text);
    setTaskList(taskList.filter((task) => task.text !== taskDeleted));
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;

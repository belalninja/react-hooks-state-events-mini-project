import React from "react";
import Task from "./Task";

function TaskList({
  tasks,
  setTaskDeleted,
  setTaskList,
  taskList,
  taskDeleted,
}) {
  const list = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        text={task.text}
        category={task.category}
        setTaskDeleted={setTaskDeleted}
        setTaskList={setTaskList}
        taskList={taskList}
        taskDeleted={taskDeleted}
      />
    );
  });
  return <div className="tasks">{list}</div>;
}

export default TaskList;

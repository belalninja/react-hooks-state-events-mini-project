import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, onTaskFormSubmit }) {
  const [data, setData] = useState({ text: "", category: "Code" });

  return (
    <form
      className="new-task-form"
      onSubmit={(e) => {
        e.preventDefault();
        onTaskFormSubmit(data);
      }}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          value={data.text}
          onChange={(e) => setData({ ...data, text: e.target.value })}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
        >
          {CATEGORIES?.slice(1).map((cat, index) => (
            <option key={index}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

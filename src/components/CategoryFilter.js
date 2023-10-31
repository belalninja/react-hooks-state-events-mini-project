import React from "react";

function CategoryFilter({ CATEGORIES, setCat, category }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES?.map((cat, index) => (
        <button
          key={index}
          className={category === cat ? "selected" : ""}
          onClick={() => setCat(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

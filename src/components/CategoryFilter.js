import React from "react";

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) =>
        <button onClick={() => handleClick(category)} key={category} className={selectedCategory === category ? "selected" : ""}>
          {category}
        </button>)}
    </div>
  );
}

export default CategoryFilter;

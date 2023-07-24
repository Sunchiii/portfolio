"use client"
import { useState } from "react";

const categories = [
  "Programming Lang",
  "Tips",
  "Story",
  "Dev Tools",
];

const CategorySelectTab = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [linePosition, setLinePosition] = useState(0);

  const handleCategoryChange = (category, index) => {
    setSelectedCategory(category);
    setLinePosition(index);
    // do something with the selected category
  };

  return (
    <div className="relative flex flex-row justify-center mt-4">
      <div className="relative flex flex-row bg-white rounded-lg shadow-lg">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`relative px-6 py-4 m-0 p-0 text-[white] ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => handleCategoryChange(category, index)}
            onMouseEnter={() => setLinePosition(index)}
            onMouseLeave={() => setLinePosition(selectedCategory)}
          >
            {category}
            {selectedCategory === category && (
              <span
                className="absolute bottom-0 right-0 w-full h-1 bg-[white]"
                style={{ transform: `translateX(${linePosition}%)` }}
              ></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelectTab;

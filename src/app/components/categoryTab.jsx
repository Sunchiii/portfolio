"use client"
import { useState } from "react";

const categories = [
  "All",
  "Programming Lang",
  "Tips",
  "Story",
  "Dev Tools",
];

const CategorySelectTab = ({onType}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [linePosition, setLinePosition] = useState(0);

  const handleCategoryChange = (category, index) => {
    setSelectedCategory(category);
    setLinePosition(index);
    // do something with the selected category
    let type = ""
    if (index == 0) type = "all"
    else if (index == 1) type = "program-lang"
    else if (index == 2) type = "tips"
    else if (index == 3) type = "story"
    else if (index == 4) type = "dev-tool"
    onType(type)
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
            onClick={() => {
              handleCategoryChange(category, index)
            }}
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

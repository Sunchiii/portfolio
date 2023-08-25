"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"

const categories = [
  "All",
  "Programming Lang",
  "Tips",
  "Story",
  "Dev Tools",
];

const CategorySelectTab = ({onType, nowValue}) => {
  const searchParams = useSearchParams()
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

  function convertTypeToIndex(nowValue){
    if(nowValue === "all") return 0
    else if(nowValue === "program-lang") return 1
    else if(nowValue === "tips") return 2
    else if(nowValue === "story") return 3
    else if(nowValue === "dev-tool") return 4
    else return 0
  }

  useEffect(()=>{
    let type = ""
    if (searchParams.has("article-type")){
      type = searchParams.get("article-type")
    }else{
      type = "all"
    }
    let initIndex = convertTypeToIndex(type)
    setLinePosition(initIndex)
    setSelectedCategory(categories[initIndex])
  },[])

  return (
    <div className="relative flex flex-row justify-center mt-4">
      <div className="relative flex flex-row bg-white rounded-lg shadow-lg">
        {nowValue && categories.map((category, index) => (
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

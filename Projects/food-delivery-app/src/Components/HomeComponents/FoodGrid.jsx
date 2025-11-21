import React from "react";
import FoodCard from "./FoodCard";

const FoodGrid = ({ foods, onSelectFood }) => {
  if (!foods.length) {
    return (
      <div className="w-full max-w-5xl mx-auto mt-10 text-center text-gray-400">
        No items found in this category.
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto mt-6 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} onClick={onSelectFood} />
        ))}
      </div>
    </div>
  );
};

export default FoodGrid;

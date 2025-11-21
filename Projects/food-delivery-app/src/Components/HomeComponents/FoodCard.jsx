import React from "react";

const FoodCard = ({ food, onClick }) => {
  return (
    <div
      className="bg-gray-900/70 rounded-2xl overflow-hidden border border-gray-800 shadow hover:shadow-lg cursor-pointer transition transform hover:-translate-y-1"
      onClick={() => onClick(food)}
    >
      <div className="h-40 w-full overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{food.name}</h3>
          <span className="text-sm px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/40">
            ₹{food.price}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-400 line-clamp-2">
          {food.description}
        </p>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1">
            ⭐ <span>{food.rating}</span>
          </span>
          <span>{food.prepTime}</span>
          <span className="px-2 py-0.5 rounded-full border border-gray-700 text-[11px]">
            {food.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

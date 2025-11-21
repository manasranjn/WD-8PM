import React, { useState, useMemo } from "react";
import { FOODS } from "../data/foods";
import CategoryFilter from "../Components/HomeComponents/CategoryFilter";
import FoodGrid from "../Components/HomeComponents/FoodGrid";
import FoodModal from "../Components/ProductComponents/FoodModal";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFood, setSelectedFood] = useState(null);
  const categories = useMemo(() => {
    const unique = Array.from(new Set(FOODS.map((f) => f.category)));
    return ["All", ...unique];
  }, []);

  const filteredFoods = useMemo(() => {
    if (selectedCategory === "All") return FOODS;
    return FOODS.filter((food) => food.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-800 to-slate-950 text-white">
      {/* Main Content */}
      <main className="pt-20 pb-10">
        <section className="w-full max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Craving Something Delicious?
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-xl">
            Explore our curated collection of meals and snacks. Filter by
            category and tap a card to see full details.
          </p>
        </section>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <FoodGrid foods={filteredFoods} onSelectFood={setSelectedFood} />
      </main>

      {/* Modal */}
      <FoodModal food={selectedFood} onClose={() => setSelectedFood(null)} />
    </div>
  );
};

export default Home;

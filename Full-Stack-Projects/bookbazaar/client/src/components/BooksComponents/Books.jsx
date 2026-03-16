import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Programming",
    "Fiction",
    "Science",
    "History",
    "Biography",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        // console.log(res.data.data);

        setBooks(res.data.data);
        setFilteredBooks(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let result = books;

    if (category !== "All") {
      result = result.filter((book) => book.category === category);
    }

    if (search) {
      result = result.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    setFilteredBooks(result);
  }, [search, category, books]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Search + Filter */}

        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-10">
          {/* Search */}

          <input
            type="text"
            placeholder="Search books..."
            className="border px-4 py-2 rounded-lg w-full md:w-72 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category Filter */}

          <select
            className="border px-4 py-2 rounded-lg w-full md:w-56 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Books Grid */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllBooks;

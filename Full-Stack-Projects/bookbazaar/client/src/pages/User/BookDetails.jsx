import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PageBanner from "../../components/common/PageBanner";
import BookCard from "../../components/BooksComponents/BookCard";

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => {
        setBook(res?.data?.data);

        axios.get("http://localhost:5000/api/books").then((allBooks) => {
          const related = allBooks.data.filter(
            (b) => b.category === res.data.category && b._id !== res.data._id,
          );

          setRelatedBooks(related.slice(0, 4));
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!book) return <p className="text-center py-20">Loading...</p>;

  return (
    <>
      <PageBanner title={book.title} subtitle="Book Details" />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Book Image */}

          <div data-aos="fade-right">
            <img
              src={book.image}
              alt={book.title}
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Book Info */}

          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4">{book.title}</h2>

            <p className="text-gray-600 mb-2">
              Author: <span className="font-medium">{book.author}</span>
            </p>

            <p className="text-gray-600 mb-4">Category: {book.category}</p>

            <p className="text-indigo-600 text-2xl font-bold mb-6">
              ₹ {book.price}
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              {book.description}
            </p>

            {/* Quantity */}

            <div className="flex items-center gap-4 mb-6">
              <label className="font-medium">Quantity:</label>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border px-3 py-2 rounded w-20"
              />
            </div>

            {/* Add to Cart */}

            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Related Books */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 data-aos="fade-up" className="text-2xl font-bold mb-10 text-center">
          Related Books
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {relatedBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BookDetails;

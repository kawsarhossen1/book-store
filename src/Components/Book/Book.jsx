import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, image, bookName, author, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6 border border-[#13131326]">
        <figure className="bg-[#F3F3F3] rounded-2xl py-8">
          <img src={image} className="h-[166px] rounded-md" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-3 justify-center">
            {tags.map((tag, index) => (
              <button key={index} className="btn hover:bg-inherit bg-[#23BE0A0D] text-[#23BE0A] font-medium p-4 ">
                {tags}
              </button>
            ))}
          </div>
          <h2 className="card-title font-bold text-2xl my-4">{bookName}</h2>
          <p className="font-medium text-[#131313CC]">By: {author}</p>
          <div className="border-t-2 border-dashed my-5"></div>
          <div className="card-actions justify-between ">
            <div className="font-medium text-[#131313CC]">{category}</div>
            <div className="rating">
              <p className="font-medium text-[#131313CC] mr-4">5.00</p>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/addToDB";
import { addWishList } from "../../Utility/addToWB";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleMarkAsRead = (id) => {
      addToStoredReadList(id);
  }

  const handleWishList = (id) =>{
    addToStoredWishList(id);
  }

  return (
    <div className="flex flex-col md:flex-row gap-12 mt-12 mb-40 justify-evenly ">
      <div className="bg-[#1313130D] p-[74px] rounded-2xl">
        <img className="max-h-screen rounded-2xl" src={image} alt="" />
      </div>
      <div>
        <h2 className="text-[40px] font-bold">{bookName}</h2>
        <p className="font-medium text-xl text-[#131313CC] mt-4">
          By: {author}
        </p>
        <div className="border-t-2  my-5"></div>
        <h4 className="font-medium text-xl text-[#131313CC]">{category}</h4>
        <div className="border-t-2  my-5"></div>
        <p className="w-[400px] font-normal leading-6 overflow-hidden   text-[#131313B3]">
          <strong>Review: </strong> {review}
        </p>
        <div className="flex gap-3 justify-start my-6">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn hover:bg-inherit bg-[#23BE0A0D] text-[#23BE0A] font-medium p-4 "
            >
              #{tags}
            </button>
          ))}
        </div>
        <div className="border-t-2  my-5"></div>
        <div className="space-y-3">
          <div className="flex">
            <p className="font-normal text-[#131313B3]">Number of Pages:</p>
            <p className="ml-16 text-[#131313] font-semibold">{totalPages}</p>
          </div>
          <div className="flex">
            <p className="font-normal text-[#131313B3]">Publisher:</p>
            <p className="ml-[120px] text-[#131313] font-semibold">
              {publisher}
            </p>
          </div>
          <div className="flex">
            <p className="font-normal text-[#131313B3]">Year of Publishing:</p>
            <p className="ml-[59px] text-[#131313] font-semibold">
              {yearOfPublishing}
            </p>
          </div>
          <div className="flex items-start">
            <p className="font-normal text-[#131313B3]">Rating:</p>
            <p className="ml-[140px] text-[#131313] font-semibold">{rating}</p>
          </div>
        </div>
        <div className="mt-5">
          <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline rounded-md hover:bg-green-500">Mark as
            Read
          </button>
          <button onClick={() => handleWishList(bookId)} className="btn btn-outline hover:bg-green-500 bg-[#59C6D2] rounded-md text-white ml-6">Add to
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

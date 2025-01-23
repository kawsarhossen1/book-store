import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);

  const [sort, setSort] = useState("");

  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "No of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }

    if (sortType === "Rating") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <h3 className="text-3xl my-8 text-center">Listed Books</h3>
      <div className="dropdown flex mb-4  justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort}` : "Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-16 ml-20"
        >
          <li onClick={() => handleSort("Rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort("No of pages")}>
            <a>No of pages</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>
            <p className="font-normal text-[18px] ">Read List</p>
          </Tab>
          <Tab>
            <p className="font-normal text-[18px]">Wish List</p>
          </Tab>
        </TabList>

        <TabPanel>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

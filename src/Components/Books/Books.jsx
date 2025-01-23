import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';

const Books = () => {


    const [books, setBooks] = useState([]);

    useEffect( () =>{
        fetch('./booksData.json')
        .then(res => res.json() )
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-24 mb-9">Books</h2>
            <p>{books.length}</p>
        </div>
    );
};

export default Books;
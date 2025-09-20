import React, { useState } from "react";
import Book from "./Book";

function Home() {
  const [books, setBooks] = useState([
    {
      id: "1",
      title: "The Return of the book",
      author: "Myself",
      coverImage:
        "https://i.pinimg.com/736x/cb/64/7e/cb647e178bbccfb7498002aa2d070f18.jpg",
    },
    {
      id: "2",
      title: "Five more books",
      author: "Another One",
      coverImage:
        "https://i.pinimg.com/736x/05/d0/51/05d05172cda45d213ddcd057619d49eb.jpg",
    },
    {
      id: "3",
      title: "How long?",
      author: "Myself",
      coverImage:
        "https://i.pinimg.com/736x/2e/29/d0/2e29d091cdc792c1c82618a86d19ac29.jpg",
    },
    {
      id: "4",
      title: "please end This day",
      author: "Another One",
      coverImage:
        "https://i.pinimg.com/736x/ea/d6/41/ead64145528e5b5e4b794c2979bd5828.jpg",
    },
  ]);

  let homeStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={homeStyle}>
      <h1>Welcome to the home page</h1>
      <p>In this place, you will find all you need for your new website</p>

      <div>
        {books.map((book, index) => {
          return (
            <Book
              key={index}
              id={book.id}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;

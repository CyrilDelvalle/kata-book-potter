import React, { useEffect, useState } from "react";
import axios from "axios";
import BookListWrapper from "./BookListWrapper";
import BookItem from "./BookItem";

function BookList({ onCalculPrice, onSetDescription }) {
  const [books, setBooks] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:3001/basket", basket).then((resp) => {
      onCalculPrice(resp.data);
    });
  }, [basket]);

  const handleAddBook = (book) => {
    setBasket((basket) => [...basket, { ...book }]);
    setBooks(
      books.map((item) =>
        item.id === book.id
          ? { ...item, currentSelected: book.currentSelected + 1 }
          : item
      )
    );
  };
  const handleRemoveBook = (book) => {
    const tomesFromBasket = basket.filter((elem) => elem.tome === book.tome);
    tomesFromBasket.pop();

    const filtered = basket.filter((elem) => elem.tome !== book.tome);
    setBasket([...filtered, ...tomesFromBasket]);

    setBooks(
      books.map((item) =>
        item.id === book.id
          ? { ...item, currentSelected: book.currentSelected - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    axios.get("http://localhost:3001/books").then((resp) => {
      const books = resp.data.map((book) => ({ ...book, currentSelected: 0 }));
      setBooks(books);
    });
  }, []);

  return (
    <BookListWrapper>
      {books.map((book) => {
        return (
          <BookItem
            key={book.id}
            book={book}
            onSetDescription={onSetDescription}
            handleAddBook={handleAddBook}
            handleRemoveBook={handleRemoveBook}
          />
        );
      })}
    </BookListWrapper>
  );
}

export default BookList;

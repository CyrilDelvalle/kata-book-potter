import React, { useState } from "react";
import BookList from "../BookList/BookList";
import BookDescription from "../BookDescription/BookDescription";
import BodyWrapper from "./BodyWrapper";

function Body({ onCalculPrice }) {
  const [currentBook, setCurrentBook] = useState({});

  const onSetCurrentBook = (elem) => {
    if (elem.tome === currentBook.tome) {
      setCurrentBook({});
    } else {
      setCurrentBook(elem);
    }
  };

  return (
    <BodyWrapper>
      <BookList
        currentBook={currentBook}
        onSetCurrentBook={(elem) => onSetCurrentBook(elem)}
        onCalculPrice={onCalculPrice}
      />
      <BookDescription description={currentBook.description} />
    </BodyWrapper>
  );
}

export default Body;

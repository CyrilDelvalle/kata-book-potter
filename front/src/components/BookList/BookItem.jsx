import React from "react";
import BookItemWrapper from "./BookItemWrapper";

function BookItem({ book, handleAddBook, handleRemoveBook, onSetDescription }) {
  return (
    <BookItemWrapper>
      <div className="book-item">
        <div
          className="book-item--image"
          onClick={() => onSetDescription(book.description)}
        >
          <img
            src={require(`../../assets/HP${book.tome}.jpg`).default}
            className="book-item--image-logo"
            alt="logo"
          />
        </div>
        <div className="book-item--name">{book.name}</div>
        <div className="book-item--buttons">
          <button
            onClick={() => handleAddBook(book)}
            className="book-item--buttons-add"
          >
            +
          </button>
          <button
            className={
              book.currentSelected > 0
                ? "book-item--buttons-remove-enabled"
                : "book-item--buttons-remove-disabled"
            }
            disabled={book.currentSelected > 0 ? false : true}
            onClick={() => handleRemoveBook(book)}
          >
            -
          </button>
        </div>
        <div className="book-item--current-selected">
          {book.currentSelected}
        </div>
      </div>
    </BookItemWrapper>
  );
}

export default BookItem;

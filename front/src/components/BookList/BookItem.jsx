import React from "react";

function BookItem({ book, handleAddBook, handleRemoveBook }) {
  return (
    <div className="book-item">
      <div className="book-item--name">{book.name}</div>
      <div className="book-item--description"> {book.description}</div>
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
      <div className="book-item--current-selected">{book.currentSelected}</div>
    </div>
  );
}

export default BookItem;

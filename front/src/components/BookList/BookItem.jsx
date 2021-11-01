import React from "react";
import BookItemWrapper from "./BookItemWrapper";

function BookItem({
  book,
  isSelected,
  handleAddBook,
  handleRemoveBook,
  onSetCurrentBook,
}) {
  return (
    <BookItemWrapper>
      <div
        className={isSelected ? "book-item-activate" : "book-item-desactivate"}
      >
        <div
          className="book-item--image"
          onClick={() => {
            onSetCurrentBook(book);
          }}
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
          {book.currentSelected}
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
      </div>
    </BookItemWrapper>
  );
}

export default BookItem;

function getBooksWithBookTome(number, booklist) {
    return booklist.filter((book) => book.tome === number)
}

module.exports = getBooksWithBookTome
function getLongestArrayLength(bookCollection) {
    let max = 0;

    bookCollection.forEach(function (book) {
        if (book.length > max) {
            max = book.length;
        }
    });
    return max
}

module.exports = getLongestArrayLength;
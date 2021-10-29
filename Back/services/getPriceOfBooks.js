const applyReduction = require('./applyReduction');
const getBooksWithBookTome = require('./getBooksWithBookTome');
const getLongestArrayLength = require('./getLongestArrayLength');

function getPriceOfBooks(bookList) {
    const totalBooks = bookList.length;

    if (totalBooks === 0) {
        return 0;
    }
    if (totalBooks === 1) {
        return 8;
    }

    if (totalBooks > 1) {
        return getDiscount(bookList)
    }

}


function getDiscount(bookList) {
    let bookCollection = [];

    for (let i = 0; i < 5; i++) {
        const number = i + 1;
        const books = getBooksWithBookTome(number, bookList)

        bookCollection.push(books)
    }

    let grandTotal = 0;
    const max = getLongestArrayLength(bookCollection);

    for (let x = 0; x < max; x++) {
        let totalBooks = 0;

        for (let y = 0; y < bookCollection.length; y++) {
            if (bookCollection[y][x]) {
                totalBooks++;
            }
        }

        grandTotal += applyReduction(totalBooks);
    }

    return grandTotal;
}

module.exports = getPriceOfBooks;
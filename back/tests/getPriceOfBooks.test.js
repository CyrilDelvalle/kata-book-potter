const getPriceOfBooks = require('../services/getPriceOfBooks')
const mockedBooks = require('../mockedData/books.json')

test('If only one book is selected, price should be 8 euros', () => {
    const discounted = getPriceOfBooks(mockedBooks.slice(0, 1));

    expect(discounted).toBe(8);
})

test('n number of the same book should return n * 8', () => {
    const mockedArray = [];

    mockedArray.push({
        id: 1,
        name: "Harry Potter à l'école des sorciers",
        description: "Un très bon bouquin",
        tome: 1
    })

    mockedArray.push({
        id: 2,
        name: "Harry Potter à l'école des sorciers",
        description: "Un très bon bouquin",
        tome: 1
    })

    expect(getPriceOfBooks(mockedArray)).toBe(16);


    mockedArray.push({
        id: 3,
        name: "Harry Potter à l'école des sorciers",
        description: "Un très bon bouquin",
        tome: 1
    })

    expect(getPriceOfBooks(mockedArray)).toBe(24);
})


test('If two differents books are selected, price should be decrease by 5 percents ', () => {
    const atemptedPrice = 16 * 0.95;
    const discounted = getPriceOfBooks(mockedBooks.slice(0, 2));

    expect(discounted).toBe(atemptedPrice);
})

test('If three differents books are selected, price should be decrease by 10 percents ', () => {
    const atemptedPrice = 24 * 0.90;
    const discounted = getPriceOfBooks(mockedBooks.slice(0, 3));

    expect(discounted).toBe(atemptedPrice);
})

test('If four differents books are selected, price should be decrease by 20 percents ', () => {
    const atemptedPrice = 32 * 0.80;
    const discounted = getPriceOfBooks(mockedBooks.slice(0, 4));

    expect(discounted).toBe(atemptedPrice);
})

test('If five differents books are selected, price should be decrease by 25 percents ', () => {
    const atemptedPrice = 40 * 0.75;
    const discounted = getPriceOfBooks(mockedBooks.slice(0, 5));

    expect(discounted).toBe(atemptedPrice);
})

test('If six differents books are selected, price should be decrease by 25 percents ', () => {
    const atemptedPrice = 48 * 0.75;
    const discounted = getPriceOfBooks(mockedBooks.slice(0, 6));

    expect(discounted).toBe(atemptedPrice);
})

test('If seven differents books are selected, price should be decrease by 30 percents ', () => {
    const atemptedPrice = parseFloat((56 * 0.70).toFixed(1));
    const discounted = getPriceOfBooks(mockedBooks.slice(0, 7));

    expect(discounted).toBe(atemptedPrice);
})


test('If seven similar books and one are selected, price should be 47.2', () => {
    const atemptedPrice = parseFloat((56 * 0.70 + 8).toFixed(1));
    const selectedValues = [...mockedBooks, {
        id: 0,
        name: "Harry Potter à l'école des sorciers",
        description: "Un très bon bouquin",
        tome: 1
    }]

    const discounted = getPriceOfBooks(selectedValues);

    expect(discounted).toBe(atemptedPrice);
})

test('If three sets of two differents books are selectd, price should be 45.6', () => {
    const atemptedPrice = parseFloat((15.2 * 3).toFixed(1))
    const selectedValues = [{
        id: 0,
        name: "Harry Potter à l'école des sorciers",
        description: "Un très bon bouquin",
        tome: 1
    },
    {
        id: 0,
        name: "Harry Potter à l'école des sorciers",
        description: "Un très bon bouquin",
        tome: 1
    },
    {
        id: 0,
        name: "Harry Potter à l'école des sorciers",
        description: "Un très bon bouquin",
        tome: 1
    }, {
        id: 1,
        name: "Harry Potter et la chambre des secrets",
        description: "Un très bon bouquin",
        tome: 2
    }, {
        id: 1,
        name: "Harry Potter et la chambre des secrets",
        description: "Un très bon bouquin",
        tome: 2
    }, {
        id: 1,
        name: "Harry Potter et la chambre des secrets",
        description: "Un très bon bouquin",
        tome: 2
    }]

    const discounted = getPriceOfBooks(selectedValues);

    expect(discounted).toBe(atemptedPrice);
})

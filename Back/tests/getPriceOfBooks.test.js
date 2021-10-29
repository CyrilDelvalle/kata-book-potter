const getPriceOfBooks = require('../services/getPriceOfBooks')

const mockedData = [{
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
    id: 2,
    name: "Harry Potter et le prisonnier d'Azkaban",
    description: "Un très bon bouquin",
    tome: 3
},
{
    id: 3,
    name: "Harry Potter et coupe de feu",
    description: "Un très bon bouquin",
    tome: 4
}, {
    id: 4,
    name: "Harry Potter et l'ordre du phénix'",
    description: "Un très bon bouquin",
    tome: 5
}]

test('If only one book is selected, price should be 8 euros', () => {
    const discounted = getPriceOfBooks(mockedData.slice(0, 1));

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
    const discounted = getPriceOfBooks(mockedData.slice(0, 2));

    expect(discounted).toBe(atemptedPrice);
})

test('If three similar books are selected, price should be decrease by 10 percents ', () => {
    const atemptedPrice = 24 * 0.90;
    const discounted = getPriceOfBooks(mockedData.slice(0, 3));

    expect(discounted).toBe(atemptedPrice);
})

test('If four similar books are selected, price should be decrease by 20 percents ', () => {
    const atemptedPrice = 32 * 0.80;
    const discounted = getPriceOfBooks(mockedData.slice(0, 4));

    expect(discounted).toBe(atemptedPrice);
})

test('If five similar books are selected, price should be decrease by 25 percents ', () => {
    const atemptedPrice = 40 * 0.75;
    const discounted = getPriceOfBooks(mockedData.slice(0, 5));

    expect(discounted).toBe(atemptedPrice);
})

test('If five similar books and one are selected, price should be 30 ', () => {
    const atemptedPrice = 40 * 0.75 + 8;
    const selectedValues = [...mockedData, {
        id: 0,
        name: "Harry Potter à l'école des sorciers",
        description: "Un très bon bouquin",
        tome: 1
    }]

    const discounted = getPriceOfBooks(selectedValues);

    expect(discounted).toBe(atemptedPrice);
})


test('If three sets of two differents books are selectd, price should be 30.6', () => {
    const atemptedPrice = 15.2 * 3
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

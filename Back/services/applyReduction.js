function applyReduction(totalBooks) {
    let cost = totalBooks * 8;
    let discount = 0;

    if (totalBooks === 2) {
        discount = (cost / 100) * 5;
        cost -= discount;
    }
    if (totalBooks === 3) {
        discount = (cost / 100) * 10;
        cost -= discount;
    }
    if (totalBooks === 4) {
        discount = (cost / 100) * 20;
        cost -= discount;
    }
    if (totalBooks === 5) {
        discount = (cost / 100) * 25;
        cost -= discount;
    }

    return cost;
}

module.exports = applyReduction;
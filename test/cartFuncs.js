// round the last digit up to 5
const roundValueUp = function (value) {
    let stringedValue = parseFloat(value).toFixed(2),
        lastNumber = parseFloat(stringedValue.slice(-1)),
        len = stringedValue.length;
    if (lastNumber > 0 && lastNumber < 5) {
        lastNumber = 5;
        return parseFloat(
            stringedValue.slice(0, len - 1) + lastNumber
        );
    }
    return value;
};

const getOriginalPrice = function (item) {
    return roundValueUp(item.count * item.price);
};

const getTaxes = function (item) {
    if (!item.isTaxed) {
        return 0;
    }
    return roundValueUp(
        item.taxRate * item.price * item.count
    );
};

const getPriceWithTax = function (item) {
    let value = getOriginalPrice(item) + getTaxes(item);
    return roundValueUp(value);
};

const getTotalTaxes = function (item) {
    return item.reduce(function (prev, curr) {
        return prev + getTaxes(curr);
    }, 0);
};

const getTotalPrice = function (item) {
    return item.reduce(function (prev, curr) {
        return prev + getPriceWithTax(curr);
    }, 0);
}

export default {
    getPriceWithTax,
    getTotalTaxes,
    getTotalPrice
}
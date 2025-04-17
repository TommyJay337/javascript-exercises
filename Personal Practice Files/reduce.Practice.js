//turns list of values into 1 single value, does not return an array unless we say so

const prices = [4,8,15,16,23,42]

const totalPrice = prices.reduce((total, currentPrice) => {
    return total + currentPrice
}, 0)

console.log(totalPrice)
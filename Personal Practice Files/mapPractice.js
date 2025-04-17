//map replaces one array with another

const prices = [4, 8, 15, 16, 23, 42];

const discountPrices = prices.map(price => price * 0.5);

console.log(prices);
console.log(discountPrices);
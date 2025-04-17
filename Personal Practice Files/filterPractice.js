//filter filters out items from an array based on a condition, and then returns a new array with only the items that pass

const products = [
    { name: "Laptop",     price: 499, color: "white" },
    { name: "Smartphone", price: 899, color: "black" },
    { name: "Headphones", price: 50,  color: "white" },
    { name: "Tablet",     price: 199, color: "grey" },
    { name: "Keyboard",   price: 210, color: "blue" }
  ];

const affordableProducts = products.filter(product => product.color === "white")
console.log(affordableProducts)
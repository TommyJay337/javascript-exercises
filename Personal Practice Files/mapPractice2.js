const products = [
    { name: "Laptop",     price: 499, color: "white" },
    { name: "Smartphone", price: 899, color: "black" },
    { name: "Headphones", price: 50,  color: "white" },
    { name: "Tablet",     price: 199, color: "grey" },
    { name: "Keyboard",   price: 210, color: "blue" }
  ];
  
  const discounts = products.map((product) => {
    return product.name
  });
  
  console.log(discounts);
  
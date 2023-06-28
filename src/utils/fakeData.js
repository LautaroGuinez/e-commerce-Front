const img = require("./img");
// Genera precio ficticio del producto
function generateRandomPrice() {
  return (Math.random() * (1000 - 10) + 10).toFixed(2);
}

// Genera descripción ficticia del producto
function generateProductDescription(productName) {
  return `This is a description of the ${productName}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla et mi dignissim dignissim. Nulla consequat turpis id purus lobortis dapibus. Morbi luctus risus ut turpis pharetra, ac venenatis ipsum volutpat. Proin id volutpat elit, eu aliquet lacus. Vestibulum luctus leo et diam dapibus aliquet. Quisque lacinia cursus justo, eu eleifend ex aliquet non. Donec in efficitur elit, in euismod mi. Sed dapibus purus id lobortis pulvinar. Aenean ut varius mauris. Nullam quis varius leo, nec luctus lectus. Nunc fringilla justo sed arcu faucibus, sed lobortis orci volutpat. Cras vitae lectus quis tellus mattis feugiat. Vivamus convallis mauris non sapien laoreet, sed convallis est fringilla. Sed nec turpis ac elit euismod rhoncus a et dui.`;
}
const fakeData = () => {
  const electronicProducts = [
    "Smartphone",
    "Tablet",
    "Laptop",
    "Smart TV",
    "Wireless Earbuds",
    "Gaming Console",
    "Smart Watch",
    "Bluetooth Speaker",
    "Camera",
    "Drone",
    "Headphones",
    "Monitor",
    "Printer",
    "External Hard Drive",
    "Keyboard",
    "Mouse",
    "Virtual Reality Headset",
    "Fitness Tracker",
    "Smart Home Hub",
    "Raspberry Pi",
  ];
  // array de productos
  const electronicProductsWithDescription = electronicProducts.map(
    (product) => ({
      name: product,
      description: generateProductDescription(product),
      price: generateRandomPrice(),
      image: img[Math.floor(Math.random() * 6)],
    })
  );
  return electronicProductsWithDescription;
};
module.exports = fakeData;
// esto lo mando a app para que veas por consola los productos

// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

let cartItems = [];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${product.name} - $${product.price} 
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  cartItems.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cartItems));

  const li = document.createElement("li");
  li.textContent = `${product.name},${product.price}`;
  cartList.appendChild(li);
}

// Clear cart
function clearCart() {
  cartItems = [];
  cartList.innerHTML = "";
  sessionStorage.removeItem("cart");
}

// On load, restore cart from sessionStorage
document.addEventListener("DOMContentLoaded", () => {
  const storedCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
  cartItems = storedCart;

  storedCart.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name},${product.price}`;
    cartList.appendChild(li);
  });

  renderProducts();
});

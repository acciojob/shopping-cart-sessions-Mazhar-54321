// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
let cartItems=[]
// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick='addToCart(${product.id})' data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  let cart = document.getElementById("cart-list");
  
}

// Add item to cart
function addToCart(productId) {
  console.log(productId,"productId",cartItems);
  let product =products.find(el=>el.id===productId);
  if(cartItems.find((el)=>el.id===productId)){
    return;
  }
  cartItems.push(product);
  let cart = document.getElementById("cart-list");
  const li = document.createElement("li");
  li.textContent=`${product.name},${product.price}`
  cart.appendChild(li);
  window.sessionStorage.setItem("cart",JSON.stringify(cartItems));
  //cartItems
  
}

// Remove item from cart
function removeFromCart(productId) {}

// Clear cart
function clearCart() {
  cartItems=[];
  let cart = document.getElementById("cart-list");
  cart.innerHTML=""
  window.sessionStorage.removeItem("cart")
}

// Initial render
renderProducts();
//renderCart();
document.addEventListener("DOMContentLoaded",function(){
let cartItemsSessionStorage =JSON.parse(window.sessionStorage.getItem("cart"));
console.log(cartItems,"cart items");
if(cartItemsSessionStorage !== null){
  
  let cart = document.getElementById("cart-list");
  cartItemsSessionStorage.forEach((product)=>{
    const li = document.createElement("li");
    li.textContent=`${product.name},${product.price}`
    cart.appendChild(li);
    cartItems.push(product)
  })

  
}
})

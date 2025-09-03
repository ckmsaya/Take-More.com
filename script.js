const products = [
  { id: 1, name: "Samsung Galaxy S23", price: 18000, img: "https://via.placeholder.com/300x200?text=Samsung+S23" },
  { id: 2, name: "MacBook Air", price: 25000, img: "https://via.placeholder.com/300x200?text=MacBook+Air" },
  { id: 3, name: "Nike Sneakers", price: 2500, img: "https://via.placeholder.com/300x200?text=Nike+Sneakers" },
  { id: 4, name: "Sony Headphones", price: 1500, img: "https://via.placeholder.com/300x200?text=Sony+Headphones" },
  { id: 5, name: "XBOX Series x", price: 14000, img: "https://via.placeholder.com/300x200?text=Canon+DSLR" },
  { id: 6, name: "Leather Backpack", price: 1200, img: "https://via.placeholder.com/300x200?text=Leather+Backpack" },
  { id: 7, name: "Smartwatch", price: 2200, img: "https://via.placeholder.com/300x200?text=Smartwatch" },
  { id: 8, name: "PlayStation 5", price: 12000, img: "https://via.placeholder.com/300x200?text=PS5" },
  { id: 9, name: "iPad Pro", price: 22000, img: "https://via.placeholder.com/300x200?text=iPad+Pro" },
  { id: 10, name: "LED TV 55inch", price: 16000, img: "https://via.placeholder.com/300x200?text=LED+TV+55inch" }
];

const productsGrid = document.getElementById("products-grid");
const cartCount = document.getElementById("cart-count");
let cartItems = [];

function updateCart() {
  const cartContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if(cartItems.length === 0){
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "";
    cartCount.textContent = 0;
    return;
  }

  cartContainer.innerHTML = "";
  let total = 0;
  cartItems.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.innerHTML = `
      <span>${item.name} - R${item.price.toLocaleString()}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(div);
  });

  cartTotal.textContent = `Total: R${total.toLocaleString()}`;
  cartCount.textContent = cartItems.length;
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Render Products and Add to Cart
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>R${product.price.toLocaleString()}</p>
    <button>Add to Cart</button>
  `;
  const button = card.querySelector("button");
  button.addEventListener("click", () => {
    cartItems.push(product);
    updateCart();
  });
  productsGrid.appendChild(card);
});
// DOM elements
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productRatingInput = document.getElementById("product-rating");
const addProductButton = document.getElementById("add-product");
const sortPriceButton = document.getElementById("sort-price");
const sortRatingButton = document.getElementById("sort-rating");
const priceGraph = document.getElementById("price-graph");
const ratingGraph = document.getElementById("rating-graph");

// Product list
let products = [];

// Function to render graphs
function renderGraphs() {
    // Clear existing graphs
    priceGraph.innerHTML = "";
    ratingGraph.innerHTML = "";

    // Render price graph
    products.forEach(product => {
        const bar = document.createElement("div");
        bar.className = "graph-bar";

        const barHeight = product.price * 2; // Adjust scaling
        bar.innerHTML = `
            <div class="bar bar-price" style="height: ${barHeight}px;">${product.price}</div>
            <span>${product.name}</span>
        `;
        priceGraph.appendChild(bar);
    });

    // Render rating graph
    products.forEach(product => {
        const bar = document.createElement("div");
        bar.className = "graph-bar";

        const barHeight = product.rating * 60; // Adjust scaling
        bar.innerHTML = `
            <div class="bar bar-rating" style="height: ${barHeight}px;">${product.rating}</div>
            <span>${product.name}</span>
        `;
        ratingGraph.appendChild(bar);
    });
}

// Function to add product
function addProduct() {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);
    const rating = parseFloat(productRatingInput.value);

    if (!name || isNaN(price) || isNaN(rating) || rating < 0 || rating > 5) {
        alert("Please enter valid product details.");
        return;
    }

    // Add product to the list
    products.push({ name, price, rating });

    // Clear input fields
    productNameInput.value = "";
    productPriceInput.value = "";
    productRatingInput.value = "";

    // Render updated graphs
    renderGraphs();
}

// Function to sort products by price
function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    renderGraphs();
}

// Function to sort products by rating
function sortByRating() {
    products.sort((a, b) => b.rating - a.rating);
    renderGraphs();
}

// Event listeners
addProductButton.addEventListener("click", addProduct);
sortPriceButton.addEventListener("click", sortByPrice);
sortRatingButton.addEventListener("click", sortByRating);

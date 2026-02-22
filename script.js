let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
alert("Product added to cart!");
}

function displayCart(){
let total = 0;
let output = "";

cart.forEach(item => {
output += `<p>${item.name} - ₹${item.price}</p>`;
total += item.price;
});

document.getElementById("cartItems").innerHTML = output;
document.getElementById("total").innerHTML = "Total: ₹" + total;
}

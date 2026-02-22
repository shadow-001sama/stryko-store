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
let discountAmount = 0;

function applyCoupon(){
let code = document.getElementById("coupon").value;
let total = cart.reduce((sum,item)=>sum+item.price,0);

if(code === "STRYKO10"){
discountAmount = total * 0.10;
document.getElementById("discount").innerHTML = 
"Discount Applied: ₹" + discountAmount.toFixed(0);
document.getElementById("total").innerHTML = 
"Final Total: ₹" + (total - discountAmount).toFixed(0);
}else{
document.getElementById("discount").innerHTML = 
"Invalid Coupon Code";
}
                        }

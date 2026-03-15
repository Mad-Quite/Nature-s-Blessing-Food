let quantities = {
    momos: 0,
    choleBhature: 0,
    frenchFries: 0,
    burger: 0,
    pizza: 0,
    eggRoll: 0,
    chowmein: 0,
    manchurian: 0,
    biryani: 0
};

let cart = {};

function changeQty(item, value, price, priceId){
    let newQty = quantities[item] + value;
    if(newQty >= 0 && newQty <= 10){
        quantities[item] = newQty;
        let total = quantities[item] * price;
        document.getElementById(item).innerText =
        quantities[item] + " pl";
        document.getElementById(priceId).innerText =
        "Total : " + total + "₹";
    }
}

function addToCart(item, price){
    cart[item] = {
        qty: quantities[item],
        price: price
    };
    alert(item + " added to cart!");
}

function viewCart(){
    let cartPanel = document.getElementById("cartPanel");
    let cartList = document.getElementById("cartItems");
    let total = 0;
    cartList.innerHTML = "";
    for(let item in cart){
        let li = document.createElement("li");
        let itemTotal = cart[item].qty * cart[item].price;
        li.innerText = item.toUpperCase() + " : " + cart[item].qty + " = " + itemTotal + "₹";
        cartList.appendChild(li);
        total += itemTotal;
    }
    document.getElementById("cartTotal").innerText =
    "Total : " + total + "₹";
    cartPanel.classList.add("active");
}

function closeCart(){
    let cartPanel = document.getElementById("cartPanel");
    cartPanel.classList.remove("active");
}
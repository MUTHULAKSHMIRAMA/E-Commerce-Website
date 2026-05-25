function goHome() {
    document.querySelector(".home").scrollIntoView({
        behavior: "smooth"
    });
}

function goProducts() {
    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });
}

function goContact() {
    document.querySelector(".contact").scrollIntoView({
        behavior: "smooth"
    });
}
let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("count").innerText = cartCount;

    alert("Product Added to Cart 🛒");
}
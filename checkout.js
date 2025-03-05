document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const paymentModal = document.getElementById("payment-modal");
    const payButton = document.getElementById("pay");

    let totalPrice = 0;
    cart.forEach(product => {
        const div = document.createElement("div");
        div.textContent = `${product.name} - $${product.price}`;
        cartItemsContainer.appendChild(div);
        totalPrice += product.price;
    });

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

    payButton.addEventListener("click", () => {
        paymentModal.style.display = "flex";
    });

    document.getElementById("confirm-payment").addEventListener("click", () => {
        alert("Payment Successful!");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    });
});

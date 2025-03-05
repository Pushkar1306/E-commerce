document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    document.getElementById("darkModeToggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Search & Filter
    const searchInput = document.getElementById("search");
    const categoryFilter = document.getElementById("category");
    const productCards = document.querySelectorAll(".product-card");

    searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const productName = card.querySelector("p").textContent.toLowerCase();
            card.style.display = productName.includes(searchValue) ? "block" : "none";
        });
    });

    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        productCards.forEach(card => {
            const category = card.getAttribute("data-category");
            card.style.display = selectedCategory === "all" || category === selectedCategory ? "block" : "none";
        });
    });
});

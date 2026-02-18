// script.js

document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // 1. SMOOTH SCROLL
    // ==============================
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ==============================
    // 2. NAVBAR COLOR CHANGE
    // ==============================
    const navbar = document.querySelector("nav");
    if (navbar) {
        window.addEventListener("scroll", function () {
            navbar.style.backgroundColor = window.scrollY > 50 ? "#000" : "#222";
        });
    }

    // ==============================
    // 3. CONTACT FORM VALIDATION
    // ==============================
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("⚠️ Please fill in all fields!");
                return;
            }

            alert(`✅ Thank you ${name}! Your message has been sent successfully.`);
            contactForm.reset();
        });
    }

    // ==============================
    // 4. MENU ITEMS USING CONSTRUCTOR
    // ==============================
    function MenuItem(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    const menu = [
        new MenuItem("Classic Burger", "Beef patty with lettuce, tomato, and cheese", 8.99),
        new MenuItem("Margherita Pizza", "Tomato, mozzarella, fresh basil", 10.99),
        new MenuItem("Chicken Biryani", "Spiced chicken with basmati rice", 12.99)
    ];

    // ==============================
    // 5. DISPLAY MENU ON MENU PAGE
    // ==============================
    const menuContainer = document.getElementById("menuContainer");
    if (menuContainer) {
        menu.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("menu-item");

            div.innerHTML = `
                <h3>${item.name} - $${item.price.toFixed(2)}</h3>
                <p>${item.description}</p>
                <button class="order-btn" data-item="${item.name}">Order Now</button>
            `;

            menuContainer.appendChild(div);
        });

        // ==============================
        // 6. ORDER BUTTONS
        // ==============================
        const buttons = document.querySelectorAll(".order-btn");
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                const itemName = this.getAttribute("data-item");
                alert(`✅ You have successfully ordered: ${itemName}`);
            });
        });
    }

});




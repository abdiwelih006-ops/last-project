// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1. CONTACT FORM FUNCTION
    ========================== */
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;

            if (name.trim() === "") {
                alert("Please enter your name.");
                return;
            }

            alert("Thank you " + name + "! Your message has been sent successfully.");
            form.reset();
        });
    }

    /* =========================
       2. SMOOTH SCROLL
    ========================== */
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* =========================
       3. NAVBAR COLOR CHANGE
    ========================== */
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#000";
        } else {
            navbar.style.backgroundColor = "#222";
        }
    });

    /* =========================
       4. ORDER BUTTON FUNCTION
    ========================== */
    const buttons = document.querySelectorAll(".order-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const itemName = this.getAttribute("data-item");
            alert("✅ You have successfully ordered: " + itemName);
            const form = document.getElementById("contactForm");

        });
    });
// ================================
// CONTACT FORM VALIDATION
// ================================
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields!");
  } else {
    alert("✅ Message sent successfully! Thank you for contacting TastyBite 🍔");
    contactForm.reset();
  }
});
// script.js

// Constructor function for menu items
function MenuItem(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

// Example: create a few menu items
const burger = new MenuItem("Classic Burger", "Beef patty with lettuce, tomato, and cheese", 8.99);
const pizza = new MenuItem("Margherita Pizza", "Tomato, mozzarella, fresh basil", 10.99);
const biryani = new MenuItem("Chicken Biryani", "Spiced chicken with basmati rice", 12.99);

// Store menu items in an array
const menu = [burger, pizza, biryani];

// Function to display menu in console
function showMenu() {
    console.log("=== TastyBite Menu ===");
    menu.forEach(item => {
        console.log(`${item.name} - $${item.price}`);
        console.log(`  ${item.description}`);
    });
}

// Call the function
showMenu();
// Object literal for a customer order
const order1 = {
    customer: "Abdiweli",
    items: [burger, biryani],
    total: function() {
        // calculate total price
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
};

console.log("Order for:", order1.customer);
console.log("Total:", order1.total().toFixed(2)); // e.g., 21.98







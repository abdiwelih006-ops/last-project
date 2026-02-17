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







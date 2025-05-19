// script.js

document.addEventListener("DOMContentLoaded", () => {
  const clickBtn = document.getElementById("clickBtn");
  const hoverBtn = document.getElementById("hoverBtn");
  const colorBtn = document.getElementById("colorBtn");
  const keyInput = document.getElementById("keyInput");
  const secretBtn = document.getElementById("secretBtn");
  const secretMsg = document.getElementById("secretMessage");
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");
  const form = document.getElementById("signupForm");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");

  // Button click
  clickBtn.addEventListener("click", () => {
    alert("Nitakufinya pia!");
  });

  // Hover effect
  hoverBtn.addEventListener("mouseenter", () => {
    hoverBtn.textContent = "You're hovering! 🪄";
  });
  hoverBtn.addEventListener("mouseleave", () => {
    hoverBtn.textContent = "Hover Over Me!";
  });

  // Change text and color
  colorBtn.addEventListener("click", () => {
    colorBtn.style.backgroundColor = "#ff69b4";
    colorBtn.textContent = "Color Changed! 💖";
  });

  // Keypress detection
  keyInput.addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });

  // Secret double click
  secretBtn.addEventListener("dblclick", () => {
    secretMsg.classList.remove("hidden");
  });

  // Tabs
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach(c => c.classList.add("hidden"));
      document.getElementById(`tab${tab.dataset.tab}`).classList.remove("hidden");
    });
  });

  // Form Validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    if (nameField.value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }

    if (passwordField.value.length < 8) {
      document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
      valid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }

    if (valid) {
      alert("Form submitted successfully! ✅");
      form.reset();
    }
  });

  // Real-time feedback
  nameField.addEventListener("input", () => {
    if (nameField.value.trim() !== "") {
      document.getElementById("nameError").textContent = "";
    }
  });

  emailField.addEventListener("input", () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      document.getElementById("emailError").textContent = "";
    }
  });

  passwordField.addEventListener("input", () => {
    if (passwordField.value.length >= 8) {
      document.getElementById("passwordError").textContent = "";
    }
  });
});

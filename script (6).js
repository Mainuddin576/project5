// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Link click par menu band karo
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Email signup form
const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!valid) {
    msg.textContent = "Sahi email address daalo.";
    msg.className = "form-msg error";
    return;
  }

  // Yahan baad me backend ya Formspree jaisi service jod sakte ho
  msg.textContent = "Shukriya! Launch par aapko batayenge.";
  msg.className = "form-msg ok";
  form.reset();
});

// Footer me current year
document.getElementById("year").textContent = new Date().getFullYear();

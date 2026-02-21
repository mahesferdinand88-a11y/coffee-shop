// Navbar shrink smooth
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);
});

// Smooth Parallax Effect
const hero = document.querySelector(".hero");
const parallax = document.querySelector(".parallax");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  if(hero){
    hero.style.backgroundPositionY = scrollY * 0.5 + "px";
  }

  if(parallax){
    parallax.style.backgroundPositionY = scrollY * 0.3 + "px";
  }
});

// Reveal animation smoother
const hidden = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold: 0.2
});

hidden.forEach(el => observer.observe(el));

// Hamburger smooth
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Form smooth feedback
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e){
  e.preventDefault();

  message.style.opacity = "0";
  setTimeout(() => {
    message.textContent = "Reservation sent successfully ☕";
    message.style.color = "#c8a97e";
    message.style.opacity = "1";
  }, 300);

  form.reset();
});
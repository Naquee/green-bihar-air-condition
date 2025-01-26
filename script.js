// Typewriter effect logics js
const textEl = document.getElementById("type-writer-effect");
const typeText =
  "Green Bihar Air Conditioning Sales & Services ( 797-735-9210 )";
let index = 0;
let startAfterDelay = 1000;
let speed = 100;

function typeWriter() {
  if (index < typeText.length) {
    textEl.textContent += typeText.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      index = 0;
      textEl.textContent = "";
      typeWriter();
    }, startAfterDelay);
  }
}
typeWriter();

//close menu on click page

document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.addEventListener("click", (event) => {
    if (
      !navbarCollapse.contains(event.target) && 
      !navbarToggler.contains(event.target) && 
      navbarCollapse.classList.contains("show") 
    ) {
      bootstrap.Collapse.getInstance(navbarCollapse).hide(); 
    }
  });

  navbarCollapse.querySelectorAll(".nav-link").forEach((navItem) => {
    navItem.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide(); 
      }
    });
  });
});

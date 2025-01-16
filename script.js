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

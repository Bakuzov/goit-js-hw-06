function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector("button.change-color");
button.addEventListener("click", handleClick);
const body = document.querySelector("body");
function handleClick(event) {
  body.style.backGround = "blue";
  // span.style.fontSize = `${font}`;
}

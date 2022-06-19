function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");
// console.dir(span);
button.addEventListener("click", handleClick);
const body = document.querySelector("body");
function handleClick() {
  // const body = `<body style = "background-color:${getRandomHexColor()}"> </body>`;
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = `${getRandomHexColor()}`;

  // span.style.fontSize = `${font}`;
}

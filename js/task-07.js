const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = `56px`;

const handleInput = (event) => {
  span.style.fontSize = event.target.value + "px";
  // console.log(span.style.fontSize);
};
input.addEventListener("input", handleInput);

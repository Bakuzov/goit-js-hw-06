const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
console.dir(span);

const handleInput = (event) => {
  const font = Number(event.target.value);
  console.dir(Number(event.target.value));
  span.style.fontSize = `${font}`;
};
input.addEventListener("input", handleInput);

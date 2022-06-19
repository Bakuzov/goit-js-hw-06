const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
console.dir(span);
span.style.fontSize = `56px`;

const handleInput = (event) => {
  const rangeSize = event.target.valueAsNumber;
  console.dir(rangeSize);

  span.style.fontSize = `${rangeSize}`;

  //  for (let i = 16; i <= 96; i += 1) {
  //    event.target.value = i;
  //  }
};
input.addEventListener("input", handleInput);

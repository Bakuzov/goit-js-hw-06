const spanEl = document.querySelector("#value");
console.log(spanEl);
let counter = 0;

const btnDown = document.querySelector(`button[data-action="decrement"]`);

console.log(btnDown);
btnDown.addEventListener("click", () => {
  counter -= 1;
  return (spanEl.textContent = counter);
});

// const handleClick = () => {
//   c -= 1;
//   spanEl = c;
//   return spanEl;
// };
// btnDown.addEventListener("click", handleClick);

const btnUp = document.querySelector('button[data-action="increment"]');
const handleClick2 = () => {
  counter += 1;
  return (spanEl.textContent = counter);
};
btnUp.addEventListener("click", handleClick2);

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
console.log("#ingredients");
const list = document.querySelector("#ingredients");
ingredients.forEach((e, i, ar) => {
  e = document.createElement("li");
  // console.log(e);
  e.textContent = ar[i];
  // console.log(e);
  e.classList.add("item");
  console.log(e);
  list.append(e);
});

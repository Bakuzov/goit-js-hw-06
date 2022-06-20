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
const listLi = ingredients.map((e, i, ar) => {
  const LiEl = document.createElement("li");
  // console.log(e);
  LiEl.textContent = e;
  // console.log(e);
  LiEl.classList.add("item");
  return LiEl;
});

list.append(...listLi);

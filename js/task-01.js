const liEl = [...document.querySelectorAll(".item")];
// console.log(liEl);
const liElAmount = liEl.length;
console.log(`Number of categories: ${liElAmount}\n\n`);

// liEl.map((e) =>
//   console.log(
//     `Category: ${e.firstElementChild.textContent}\nElements: ${e.firstElementChild.nextElementSibling.children.length}`
//   )
// );

liEl.forEach((e) =>
  console.log(
    `Category: ${e.firstElementChild.textContent}\nElements: ${e.firstElementChild.nextElementSibling.children.length}\n\n`
  )
);

// const header = liEl[0].firstElementChild.textContent;
// console.log(`Category: ${header}`);

// const LiChildren = liEl[0].querySelectorAll("li");
// const LiChildrenAmount = LiChildren.length;
// console.log(`Elements: ${LiChildrenAmount}`);

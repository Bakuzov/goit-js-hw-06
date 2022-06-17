const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
// const newLi = `<li><img src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="White and Black Long Fur Cat" /></li> `;

const createList = images.map(({ url, alt }) => {
  console.log(url);
  return `<li  class = "galary_item"><img class = "galary_img" src="${url}" alt="${alt}" width = "200px" /></li>`;
});
// const newLi = document.querySelector(".galary_item");
// newLi.style.width = "30px";
list.insertAdjacentHTML("beforeend", createList);

// images.forEach((e, i, ar) => {
//   const newLi = e.url;
//   // console.log(e);
//   e.textContent = ar[i];
//   // console.log(e);
//   // e.classList.add("item");
//   // console.log(e);
//   // list.append(e);
// });
// list.insertAdjacentHTML("beforeend", newLi);

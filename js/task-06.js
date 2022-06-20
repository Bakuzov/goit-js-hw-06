const input = document.querySelector("#validation-input");
// console.dir(Number(input.dataset.length));
const hadlerBlur = (event) => {
  console.log(event.target.value.length);
  if (event.target.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    // input.setAttribute("id", "validation-input valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    // input.setAttribute("id", "validation-input invalid");
  }
};
input.addEventListener("blur", hadlerBlur);

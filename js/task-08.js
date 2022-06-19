const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // console.dir(event.currentTarget);
  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);

  // const formElements = event.currentTarget.elements;
  // const mail = formElements.email.value;
  // const pass = formElements.password.value;
  // if (mail === "" || pass === "") {
  //   alert("Все поля должны быть заполнены");
  // }
  // let labelEmail = form.firstElementChild.outerText;
  // // console.log(labelEmail);
  // let labelPassword = form.firstElementChild.nextElementSibling.outerText;
  // // console.log(labelPassword);
  // //  const e = event.currentTarget.children[0].textContent;
  // //   console.dir(event.currentTarget.children[0]);
  // const obj = {
  //   [labelEmail]: mail,
  //   password: pass,
  // };
  // console.log(obj);

  event.currentTarget.reset();
}

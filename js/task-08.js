const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //   console.dir(event.currentTarget.elements);
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);

  // const formElements = event.currentTarget.elements;
  //   const mail = formElements.email.value;
  //   const pass = formElements.password.value;
  //   if (mail === "" || pass === "") {
  //     alert("Все поля должны быть заполнены");
  //   }
  //   let labelEmail = form.firstElementChild.outerText;
  //   let labelPassword = form.firstElementChild.nextElementSibling.outerText;
  //   console.log(labelEmail);
  //   const obj = {
  //     labelEmail: mail,
  //     [labelPassword]: pass,
  //   };
  //   console.log(obj);

  event.currentTarget.reset();
}

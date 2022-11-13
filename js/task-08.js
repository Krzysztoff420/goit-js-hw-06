const form = document.querySelector("form.login-form");

form.addEventListener("submit", takeSubmit);

function takeSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert(
      "You have to fill in both login and password fields to log in!"
    );
  }
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}

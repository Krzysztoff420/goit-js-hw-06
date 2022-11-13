const input = document.querySelector("input#validation-input");

input.addEventListener("blur", (event) => {
  input.value.length == input.dataset.length
    ? input.classList.add("valid")
    : input.classList.add("invalid");
});

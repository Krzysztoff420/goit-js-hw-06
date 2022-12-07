const input = document.querySelector("input#validation-input");

input.addEventListener("blur", (event) => {
  input.value.length == input.dataset.length
    ? [input.classList.remove("invalid"), input.classList.add("valid")]
    : [input.classList.remove("valid"), input.classList.add("invalid")];
});

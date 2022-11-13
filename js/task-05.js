const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
  event.currentTarget.value == ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = event.currentTarget.value);
});

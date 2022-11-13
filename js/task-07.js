const fontSizeInput = document.querySelector("input#font-size-control");
const fontSizeOutput = document.querySelector("span#text");

fontSizeOutput.style.fontSize = fontSizeInput.value + "px";

fontSizeInput.addEventListener("input", (event) => {
  fontSizeOutput.style.fontSize = event.currentTarget.value + "px";
});

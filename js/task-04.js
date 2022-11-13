const counterValue = document.querySelector("#value");
let value = 0;
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

const valueUp = () => {
  value += 1;
  counterValue.textContent = value;
};

const valueDown = () => {
  value -= 1;
  counterValue.textContent = value;
};

incrementButton.addEventListener("click", valueUp);
decrementButton.addEventListener("click", valueDown);

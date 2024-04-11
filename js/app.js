import ssnMask from "./maks.js";

const inputEl = document.getElementById("inputText");

const applyMask = (event) => {
  const value = event.target.value;
  const maskedValue = ssnMask(value);
  if (maskedValue) {
    inputEl.value = maskedValue;
  }
};

inputEl.addEventListener("keyup", applyMask);

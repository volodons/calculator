"use strict";

// Calculator's input/output field
const result = document.querySelector("#result");

// All buttons selected
const buttonZero = document.querySelector("#zero");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");
const buttonFive = document.querySelector("#five");
const buttonSix = document.querySelector("#six");
const buttonSeven = document.querySelector("#seven");
const buttonEight = document.querySelector("#eight");
const buttonNine = document.querySelector("#nine");
const buttonC = document.querySelector("#c");
const buttonCE = document.querySelector("#ce");
const buttonPlus = document.querySelector("#plus");
const buttonMinus = document.querySelector("#minus");
const buttonAsterisk = document.querySelector("#asterisk");
const buttonSlash = document.querySelector("#slash");
const buttonEquals = document.querySelector("#equals");

// Event listeners added to all buttons
buttonZero.addEventListener("click", () => pushNumber(0));
buttonOne.addEventListener("click", () => pushNumber(1));
buttonTwo.addEventListener("click", () => pushNumber(2));
buttonThree.addEventListener("click", () => pushNumber(3));
buttonFour.addEventListener("click", () => pushNumber(4));
buttonFive.addEventListener("click", () => pushNumber(5));
buttonSix.addEventListener("click", () => pushNumber(6));
buttonSeven.addEventListener("click", () => pushNumber(7));
buttonEight.addEventListener("click", () => pushNumber(8));
buttonNine.addEventListener("click", () => pushNumber(9));
buttonC.addEventListener("click", pushClear);
buttonCE.addEventListener("click", pushClearEntry);
buttonPlus.addEventListener("click", pushPlus);
buttonMinus.addEventListener("click", pushMinus);
buttonAsterisk.addEventListener("click", pushAsterisk);
buttonSlash.addEventListener("click", pushSlash);
buttonEquals.addEventListener("click", pushEquals);

// Pushes number to input/output field
function pushNumber(number) {
  let newNumber = document.createElement("span");
  newNumber.append(number);
  result.append(newNumber);
  return;
}

// Clears input/output field
function pushClear() {
  result.innerText = "";
  return;
}

// Clears input/output field
function pushClearEntry() {
  result.innerText = "";
  return;
}

// Pushes plus sign to input/output field
function pushPlus() {
  const plusSign = document.createElement("span");
  plusSign.innerText = "+";
  result.append(plusSign);
}

// Pushes minus sign to input/output field
function pushMinus() {
  const minusSign = document.createElement("span");
  minusSign.innerText = "-";
  result.append(minusSign);
}

// Pushes asterisk sign to input/output field
function pushAsterisk() {
  const asteriskSign = document.createElement("span");
  asteriskSign.innerText = "*";
  result.append(asteriskSign);
}

// Pushes slash sign to input/output field
function pushSlash() {
  const slashSign = document.createElement("span");
  slashSign.innerText = "/";
  result.append(slashSign);
}

// Takes input string, evaluates it, performs a math operation, clears input field, adds result to input/output field
function pushEquals() {
  const resultValue = result.value;
  const equalsResult = eval(resultValue);
  pushClearEntry();
  result.append(equalsResult);
}

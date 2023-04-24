"use strict";

const result = document.querySelector("#result");

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
const buttonPlus = document.querySelector("#add");
const buttonMinus = document.querySelector("#subtract");
const buttonAsterisk = document.querySelector("#multiply");
const buttonSlash = document.querySelector("#divide");
const buttonEquals = document.querySelector("#equally");

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
buttonPlus.addEventListener("click", pushPlus);
buttonMinus.addEventListener("click", pushMinus);
buttonAsterisk.addEventListener("click", pushAsterisk);
buttonSlash.addEventListener("click", pushSlash);
buttonEquals.addEventListener("click", pushEquals);

function pushNumber(number) {
  let newNumber = document.createElement("span");
  newNumber.append(number);
  result.append(newNumber);
  return;
}

function pushClear() {
  result.innerText = "";
  return;
}

function pushPlus() {
  const plusSign = document.createElement("span");
  plusSign.innerText = "+";
  result.append(plusSign);
}

function pushMinus() {
  const minusSign = document.createElement("span");
  minusSign.innerText = "-";
  result.append(minusSign);
}

function pushAsterisk() {
  const asteriskSign = document.createElement("span");
  asteriskSign.innerText = "*";
  result.append(asteriskSign);
}

function pushSlash() {
  const slashSign = document.createElement("span");
  slashSign.innerText = "/";
  result.append(slashSign);
}

function pushEquals() {
  const resultValue = result.value;
  const equalsResult = eval(resultValue);
  pushClear();
  result.append(equalsResult);
}

"use strict";

const buttonEqually = document.querySelector("#equally");
const buttonAdd = document.querySelector("#add");
const buttonSubtract = document.querySelector("#subtract");
const buttonMultiply = document.querySelector("#multiply");
const buttonDivide = document.querySelector("#divide");
const buttonC = document.querySelector("#c");
const buttonCE = document.querySelector("#ce");
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
const result = document.querySelector("#result");

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

buttonC.addEventListener("click", clear);

buttonAdd.addEventListener("click", add);
buttonSubtract.addEventListener("click", subtract);
buttonMultiply.addEventListener("click", multiply);
buttonDivide.addEventListener("click", divide);

buttonEqually.addEventListener("click", equally);

function pushNumber(number) {
  let newNumber = document.createElement("span");
  newNumber.append(number);
  result.append(newNumber);
  return;
}

function clear() {
  result.innerText = "";
  return;
}

function add() {
  const operatorAdd = document.createElement("span");
  operatorAdd.innerText = "+";
  result.append(operatorAdd);
}

function subtract() {
  const operatorSubtract = document.createElement("span");
  operatorSubtract.innerText = "-";
  result.append(operatorSubtract);
}

function multiply() {
  const operatorMultiply = document.createElement("span");
  operatorMultiply.innerText = "*";
  result.append(operatorMultiply);
}

function divide() {
  const operatorDivide = document.createElement("span");
  operatorDivide.innerText = "/";
  result.append(operatorDivide);
}

function equally() {
  const resultValue = result.value;
  const stringArray = resultValue.split("+");
  alert(stringArray);
  const numArray = stringArray.map((str) => parseFloat(str));
  alert(numArray);
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  clear();
  result.append(sum);
}

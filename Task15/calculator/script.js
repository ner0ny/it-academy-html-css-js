const numbers = document.querySelectorAll(".number");
const result = document.querySelector("input");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

result.value = resultValue;

function one() {
  let atr = "1";
  val(atr);
}

function two() {
  let atr = "2";
  val(atr);
}

function thre() {
  let atr = "3";
  val(atr);
}

function four() {
  let atr = "4";
  val(atr);
}

function five() {
  let atr = "5";
  val(atr);
}

function six() {
  let atr = "6";
  val(atr);
}

function seven() {
  let atr = "7";
  val(atr);
}

function eight() {
  let atr = "8";
  val(atr);
}

function nine() {
  let atr = "9";
  val(atr);
}

function zero() {
  let atr = "0";
  val(atr);
}

function dott() {
  let atr = ".";
  val(atr);
}

function val(atr) {
  if (isFirstValue === false) {
    getFirstValue(atr);
  }

  if (isSecondValue == false) {
    getSecondValue(atr);
  }
}

function getFirstValue(el) {
  result.value = "";
  firstValue += el;
  console.log(firstValue);
  result.value = firstValue;
  if (el != ".") {
    firstValue = +firstValue;
  }
}

function getSecondValue(el) {
  if (firstValue != "" && sign != "") {
    secondValue += el;
    result.value = secondValue;
    if (el != ".") {
      secondValue = +secondValue;
    }
  }
}

function plus() {
  sign = "+";
  isFirstValue = true;
}

function minus() {
  sign = "-";
  isFirstValue = true;
}

function multiply() {
  sign = "x";
  isFirstValue = true;
}

function divide() {
  sign = "/";
  isFirstValue = true;
}

function equals() {
  result.value = "";
  if (sign === "+") {
    resultValue = firstValue + secondValue;
  } else if (sign === "-") {
    resultValue = firstValue - secondValue;
  } else if (sign === "x") {
    resultValue = firstValue * secondValue;
  } else if (sign === "/") {
    if (secondValue === 0) {
      resultValue = "Ошибка";
    } else {
      resultValue = firstValue / secondValue;
    }
  }
  result.value = resultValue;
  firstValue = resultValue;
  secondValue = "";
}

function del() {
  result.value = 0;
  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = false;
  sign = "";
  resultValue = 0;
}

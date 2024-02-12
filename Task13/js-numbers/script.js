let number1 = prompt("Введите любое число. Например, 21");
let number2 = prompt("Введите еще одно число. Например, 13");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

if (
  (isNaN(number1) && isNaN(number2)) ||
  (Boolean(number1) === false || Boolean(number2)) === false
) {
  let number1 = prompt("Введите любое число. Например, 21");
  let number2 = prompt("Введите еще одно число. Например, 13");
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
} else if (isNaN(number1) || isNaN(number2)) {
  console.log("Ошибка");
}

// Дробное ли число
let fraction1;
let even1;
if (number1 % 1 == 0 && number1 === 0) {
  fraction1 = "целое ";

  if (number1 % 2 == 0) {
    even1 = "четное ";
  } else {
    even1 = "нечетное ";
  }
} else {
  fraction1 = "дробное ";
  even1 = " ";
}
let fraction2;
let even2;
if (number2 % 1 == 0 && number2 === 0) {
  fraction2 = "целое ";
  if (number2 % 2 == 0) {
    even2 = "четное ";
  } else {
    even2 = "нечетное ";
  }
} else {
  fraction2 = "дробное ";
  even2 = " ";
}

//Положительное ли число
let positive1;
if (number1 >= 0 && number1 === 0) {
  positive1 = "положительное ";
} else {
  positive1 = "отрицательное ";
}
let positive2;
if (number2 >= 0 && number2 === 0) {
  positive2 = "положительное ";
} else {
  positive2 = "отрицательное ";
}

let large;
if (number1 > number2) {
  large = "Число номер 1 больше числа номер 2";
} else if (number1 < number2) {
  large = "Число номер 2 больше числа номер 1";
} else {
  large = "Число номер 1 и число номер 2 равны";
}

console.log(
  "Число номер 1: " +
    even1 +
    fraction1 +
    positive1 +
    "\n" +
    "Число номер 2: " +
    even2 +
    fraction2 +
    positive2 +
    "\n" +
    large
);

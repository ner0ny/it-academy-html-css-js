let firstName = prompt("Введите Ваше имя:");
while (Boolean(firstName) === false) {
  firstName = prompt("Ошибка! Введите Ваше имя (например, Иван)");
}

let secondName = prompt("Введите Вашу фамилию:");
while (Boolean(secondName) === false) {
  secondName = prompt("Ошибка! Введите Вашу фамилию (например, Юрьев)");
}

let surname = prompt("Введите Ваше отчество:");
while (Boolean(surname) === false) {
  surname = prompt("Ошибка! Введите Ваше отчество (например, Сергеевич)");
}

let age = prompt("Введите Ваш возраст (в годах)");
while (age >= 100) {
  age = prompt(
    "Вам не может быть так много лет! Введите Ваш настоящий возраст"
  );
}
while (isNaN(age) || age < 0 || Boolean(age) === false) {
  age = prompt("Ошибка! Введите возраст в годах (например, 18)");
  age = parseFloat(age);
}

let gender = confirm("Ваш пол мужской?");

let ageDays = age * 365;

if (gender) {
  gender = "Мужской";
} else {
  gender = "Женский";
}

let adult;
if (age >= 18) {
  adult = "Вы уже совершеннолетний";
} else {
  adult = "Вы несовершеннолетний";
}

let pension;
if (age >= 60) {
  pension = "Да";
} else {
  pension = "Нет";
}

alert(
  "Ваше ФИО: " +
    secondName +
    " " +
    firstName +
    " " +
    surname +
    "\nВаш возраст в годах: " +
    age +
    "\nВаш возраст в днях: " +
    ageDays +
    "\n" +
    adult +
    "\nВаш пол: " +
    gender +
    "\nВы на пенсии: " +
    pension
);

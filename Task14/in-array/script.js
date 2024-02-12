let myArr = [];
myArr.length = 5;

function btnClickHandler1() {
  alert("Введите 5 фруктов");
  for (let i = 0; i < myArr.length; i += 1) {
    while (Boolean(myArr[i]) === false) {
      myArr[i] = prompt("Введите фрукт");
    }
  }
  console.log(myArr);
}

function btnClickHandler2() {
  myArr = [];
  console.log(myArr);
}

function btnClickHandler3() {
  let fruit;
  while (Boolean(fruit) === false) {
    fruit = prompt("Введите фрукт");
  }

  let flag = 0;

  for (let i = 0; i < myArr.length; i += 1) {
    if (fruit === myArr[i]) {
      alert(fruit + " есть в массиве. Идекс = " + i);
      flag = 1;
    }
  }

  if (flag !== 1) {
    myArr[myArr.length] = fruit;
    alert(fruit + " добавлен в массив.");
  }

  console.log(myArr);
}

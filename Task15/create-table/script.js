const createBtn = document.querySelector(".create-btn");
const hideBtn = document.querySelector(".hide-btn");
const showBtn = document.querySelector(".show-btn");

function createTable() {
  let cell = prompt("Введите количество ячеек (1-10)");
  while (isNaN(cell) || cell < 0 || !Boolean(cell) || cell > 10) {
    cell = prompt("Введите количество ячеек (1-10)");
  }

  let table = document.createElement("table");

  for (let i = 1; i <= cell; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= cell; j++) {
      let td = document.createElement("td");
      td.innerHTML += i + " x " + j;
      tr.appendChild(td);
      if (j === i) {
        let background = "red";
        let color = "white";
        td.style.background = background;
        td.style.color = color;
      }
    }
    table.appendChild(tr);
  }

  document.body.append(table);
  createBtn.setAttribute("disabled", "");
  hideBtn.classList.remove("disable");
  showBtn.setAttribute("disabled", "");
  showBtn.classList.remove("disable");
}

function disableTable() {
  document.querySelector("table").classList.add("disable");
  showBtn.removeAttribute("disabled", "");
  hideBtn.setAttribute("disabled", "");
}

function showTable() {
  document.querySelector("table").classList.remove("disable");
  showBtn.setAttribute("disabled", "");
  hideBtn.removeAttribute("disabled", "");
}

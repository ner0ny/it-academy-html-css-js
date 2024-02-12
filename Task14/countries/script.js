function addCountryBtn() {
  let country = "";
  let capital = "";
  while (Boolean(country) === false) {
    country = prompt("Введите название страны");
  }
  while (Boolean(capital) === false) {
    capital = prompt("Введите название столицы");
  }
  addСountry(country, capital);
}

function getCountryInfoBtn() {
  let country = "";
  while (Boolean(country) === false) {
    country = prompt("Введите название страны");
  }
  console.log(getcountryInfo(country));
}
function listСountriesBtn() {
  console.log(listСountries());
}
function deleteСountryBtn() {
  let country = "";
  while (Boolean(country) === false) {
    country = prompt("Введите название страны");
  }
  deleteСountry(country);
}

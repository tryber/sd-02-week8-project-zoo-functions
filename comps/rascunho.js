const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
const prices = {
  'Adult': 49.99,
  'Senior': 24.99,
  'Child': 20.99
}

const { Adult, Child, Senior } = entrants;
const arrEntrants = [Adult, Senior, Child]
const total = arrEntrants
.map((quantIngresso, indice) => quantIngresso * Object.values(prices)[indice])
.reduce ((a,b) => a+b);
console.log(total)
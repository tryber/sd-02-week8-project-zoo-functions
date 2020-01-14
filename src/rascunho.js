const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
const prices = {
  'Adult': 49.99,
  'Senior': 24.99,
  'Child': 20.99
}

const entradasNumero = [Object.values(entrants)[0], Object.values(entrants)[2], Object.values(entrants)[1]];
const total = entradasNumero
.map((quantIngresso, indice) => quantIngresso * Object.values(prices)[indice])
.reduce ((a,b) => a+b);

console.log(Object.values(entrants))
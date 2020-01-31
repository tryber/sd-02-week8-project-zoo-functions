const data = require('./data');

function increasePrices(percentage) {
  const obj = {};
  const prices = Object.entries(data.prices);
  const raise = prices.forEach(e => {
    obj[e[0]] = Math.round((e[1] + e[1] * percentage / 100) * 100) / 100
  });
  data.prices = obj
};



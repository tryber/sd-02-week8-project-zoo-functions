const data = require('./data');

module.exports = function schedule(dayName) {
  const hours = {};
  if (typeof dayName === 'undefined') {
    Object.entries(data.hours).forEach((key) => {
      hours[key[0]] = `Open from ${key[1].open}am until ${key[1].close - 12}pm`;
    });
  } else {
    hours[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm`
  }
  if (hours.Monday) { hours.Monday = 'CLOSED'; }
  return hours;
};

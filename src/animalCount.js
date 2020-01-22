const data = require('./data');

module.exports = function animalCount(species) {
  const animals = {};
  data.animals.forEach((animal) => {
    animals[animal.name] = animal.residents.length
  });

  if (typeof species === 'undefined') {
    return animals;
  }
  return animals[species];
};

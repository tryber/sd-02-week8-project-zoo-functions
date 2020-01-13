const data = require('./data')

function entryCalculator(entrants) {
  // seu código aqui
};

function schedule(dayName) {
  // seu código aqui
};

function animalCount(species) {
  if (species == null) {
    const arranjoAnimais = {};
    data.animals.forEach((especie) => {
      arranjoAnimais[especie.name] = especie.residents.length
    });
    return arranjoAnimais
  }
  return data.animals.find(animal => (animal.name === species)).residents.length;
};

function animalMap(options) {
  // seu código aqui
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  const animaisPorId = []
  if (ids.length === 0) {
    return animaisPorId;
  }
  ids.map(idPassado => animaisPorId.push(data.animals.find(animal => idPassado === animal.id)))
  return animaisPorId;
}

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(employeeName) {
  // seu código aqui
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  // seu código aqui
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const empregado = {};
  empregado.id = id;
  empregado.firstName = firstName;
  empregado.lastName = lastName;
  empregado.managers = managers;
  empregado.responsibleFor = responsibleFor;
  data.employees.push(empregado)
}

function isManager(id) {
  const eGerente = data.employees.some(trabalhador =>
    trabalhador.managers.some(gerentes =>
      gerentes === id))
  return eGerente
}

function animalsOlderThan(animal, age) {
  const selecionarAnimais = data.animals.find(elemento => elemento.name === animal)
  return selecionarAnimais.residents.every(idades => idades.age > age)
}

function oldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find(empregado => empregado.id === id).responsibleFor[0];
  const arranjoResidents = data.animals.find(especies => especies.id === idAnimal).residents
  let maiorIdade = 0;
  arranjoResidents.forEach((residente) => {
    maiorIdade = maiorIdade < residente.age ? residente.age : maiorIdade
  })
  const { name, sex, age } = arranjoResidents.find(residente => residente.age === maiorIdade)
  return [name, sex, age]
}

function increasePrices(percentage) {
  arranjoIdades = Object.keys(data.prices)
  arranjoIdades.forEach((faixaEtaria) =>
      data.prices[faixaEtaria] = parseFloat((Math.ceil((data.prices[faixaEtaria] * (100 + percentage))) / 100).toFixed(2)));
}

class Animal {
  // seu código aqui
}

function createAnimals() {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage,
  addEmployee: addEmployee,
  isManager: isManager,
  animalsOlderThan: animalsOlderThan,
  oldestFromFirstSpecies: oldestFromFirstSpecies,
  increasePrices: increasePrices,
  createAnimals: createAnimals,
  Animal: Animal,
  createEmployee: createEmployee
}

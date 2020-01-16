const data = require('./data')

function entryCalculator(entrants) {
  const adult = (Object.values(entrants)[0] * 46.985);
  const senior = (Object.values(entrants)[1] * 23.4925);
  const child = (Object.values(entrants)[2] * 23.4925);
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
    return adult + senior + child;
  }

function schedule(dayName) {
  const newObj = {};
  if (dayName === null) {
    return 0;
  };
  Object.keys(data.hours).forEach((key) => {
    if (key === dayName) {
        newObj[key] = data.hours[key];
        console.log(newObj)
      }
  });
  return newObj;
};

function animalCount(species) {
  const obj = {};
  if (species === undefined) {
    data.animals.forEach((item) => {
      obj[item.name] = item.residents.length;
    });
    return obj;
  }
    const contagem = data.animals.filter(({ name }) => {
      return name === species;
    });
    return contagem[0].residents.length;
  };

function animalMap(options) {
  const objMain = {};
  if (options === undefined) {
    const objKeys = {};
    data.animals.forEach(item => {
      objKeys[item.location] = null;
    });
    const keys = Object.keys(objKeys);
    const atribuirKeys = keys.forEach(element => {
      const localizarNome = data.animals.filter(({ location }) => location === element);
      objMain[element] = localizarNome.reduce((acumulador, { name }) =>
      acumulador.concat(name), []);
    });
  }
  return objMain;
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(ids) {
  // seu código aqui
};

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

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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

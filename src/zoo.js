const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  let resultado = 0;
  Object.entries(data.prices).forEach((key) => {
    resultado += entrants[key[0]] * key[1];
  });
  return resultado;
};

function schedule(dayName) {
  const days = dayName ? [dayName] : Object.keys(data.hours);
  return days.reduce((acc, day) => {
    const { open, close } = data.hours[day];
    let text = ''
    if (day === 'Monday') {
      text = 'CLOSED'
    } else {
      text = `Open from ${open}am until ${close - 12}pm`
    }
    acc[day] = text;
    return acc;
  }, {});
};

function animalCount(species) {
  const nomes = data.animals.map(e => e.name);
  const quantidade = data.animals.map(e => e.residents.length);
  const obj = {};
  nomes.forEach((nome, index) => {
    obj[nome] = quantidade[index];
  })
  if (species === null || species === undefined) {
    return obj;
  }
  return obj[species];
};

function animalsFilteredBySex(animals, sex) {
  if (!sex) return animals
  return animals.filter(({ sex: animalSex }) => sex === animalSex)
}

function sortedAnimalNames(animalNames, sorted) {
  if (!sorted) return animalNames
  return animalNames.sort()
}

function animalMap(options) {
  const { includeNames, sex, sorted } = options
  return data.animals.reduce((obj, animal) => {
    const animalsInLocation = obj[animal.location] || []

    if (!includeNames) {
      obj[animal.location] = [...animalsInLocation, animal.name]
      return obj
    }

    let animals = animal.residents
    animals = animalsFilteredBySex(animals, sex)
    let animalNames = animals.map(({ name }) => name)
    animalNames = sortedAnimalNames(animalNames, sorted)
    obj[animal.location] = [...animalsInLocation, { [animal.name]: animalNames }]
    return obj
  }, {})
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(ids) {
  if (ids === null || ids === undefined) {
    return []
  }
  return ids.map(arg => data.animals.find(item => item.id === arg));
};

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(employeeName) {
  if (employeeName === null || employeeName === undefined) {
    return {}
  }
  return data.employees.find((e => e.firstName === employeeName || e.lastName === employeeName))
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  const obj = {}
  data.employees.forEach(e => {
    obj[`${e.firstName} ${e.lastName}`] =
      e.responsibleFor.map(id => data.animals.find(animal => animal.id === id).name)
  })
  const inputFuncionario = input => {
    const funcionario = data.employees.find(e => e.id === input || e.firstName === input || e.lastName === input)
    return `${funcionario.firstName} ${funcionario.lastName}`
  }
  if (idOrName === null || idOrName === undefined) {
    return obj
  } else {
    const obj1 = {}
    obj1[inputFuncionario(idOrName)] = obj[inputFuncionario(idOrName)]
    return obj1
  }
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newObj = { id, firstName, lastName, managers, responsibleFor };

  data.employees.push(newObj);
}

function isManager(id) {
  return data.employees.map(e => e.managers).some(b => b.some(a => a === id))
};

function animalsOlderThan(animal, age) {
  return data.animals
    .find(animalesco => animalesco.name === animal).residents
    .every(elemento => elemento.age >= age)
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

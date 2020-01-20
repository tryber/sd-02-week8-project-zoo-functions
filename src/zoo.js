const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const { Adult, Senior, Child } = data.prices;
  const { Adult: Adulto = 0, Senior: Velhinho = 0, Child: Pirralho = 0 } = entrants;
  return ((Adulto * Adult) + (Velhinho * Senior) + (Pirralho * Child));
};

function schedule(dayName) {
  const days = dayName ? [dayName] : Object.keys(data.hours);
  return days.reduce((acc, day) => {
    const { open, close } = data.hours[day];
    const text = day === 'Monday'
      ? 'CLOSED'
      : `Open from ${open}am until ${close - 12}pm`
    acc[day] = text;
    return acc;
  }, {});
};

function animalCount(species) {
  if (species === undefined) {
    const animaisCount = data.animals.reduce((emptyValue, CurrentValue) => {
      emptyValue[`${CurrentValue.name}`] = CurrentValue.residents.length
      return emptyValue
    }, {})
    return animaisCount
  }

  return data.animals.find(animal => animal.name === species).residents.length
};

function primeiroRequisito() {
  return data.animals.reduce((emptyValue, CurrentValue) => {
    if (emptyValue[CurrentValue.location] === undefined) {
      emptyValue[CurrentValue.location] = [];
    }
    emptyValue[CurrentValue.location] =
    [...emptyValue[CurrentValue.location], CurrentValue.name];
    return emptyValue;
  }, {})
}

function segundoRequisito() {
  return data.animals.reduce((emptyValue, CurrentValue) => {
    if (emptyValue[CurrentValue.location] === undefined) {
      emptyValue[CurrentValue.location] = [];
    }
    emptyValue[CurrentValue.location] =
    [...emptyValue[CurrentValue.location], { [CurrentValue.name]: CurrentValue.residents
      .map(resident => resident.name) }]
    return emptyValue;
  }, {})
}

function terceiroRequisito() {
  return data.animals.reduce((emptyValue, CurrentValue) => {
    if (emptyValue[CurrentValue.location] === undefined) {
      emptyValue[CurrentValue.location] = [];
    }
    emptyValue[CurrentValue.location] =
    [...emptyValue[CurrentValue.location], { [CurrentValue.name]: CurrentValue.residents
      .map(resident => resident.name).sort() }]
    return emptyValue;
  }, {})
}

function quartoRequisito() {
  return data.animals.reduce((emptyValue, CurrentValue) => {
    if (emptyValue[CurrentValue.location] === undefined) {
      emptyValue[CurrentValue.location] = [];
    }
    emptyValue[CurrentValue.location] =
    [...emptyValue[CurrentValue.location], { [CurrentValue.name]: CurrentValue.residents
      .filter(resident => resident.sex === 'female').map(animal => animal.name) }]
    return emptyValue;
  }, {})
}

function animalMap(options) {
  if (!options || (options.sex && !options.includeNames)) {
    return primeiroRequisito()
  }
  if (options.sorted) {
    return terceiroRequisito()
  }
  if (options.sex) {
    return quartoRequisito()
  }
  return segundoRequisito()
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  const expected = [];
  if (ids === undefined) {
    return expected;
  }
  const animalsId = [];
  ids.map(arrIds => animalsId.push(data.animals.find(info => info.id === arrIds)));
  return animalsId
};

function animalByName(animalName) {
  let nomeDoAnimal = 'tigers';
  if (animalName === undefined) {
    return nomeDoAnimal
  }
  nomeDoAnimal = data.animals
    .find(animal => animal.residents
      .find(resident => resident.name === animalName)).name
  return nomeDoAnimal.slice(0, -1);
};

function employeesByIds(...ids) {
  const expected = [];
  if (ids === undefined) {
    return expected;
  }
  return data.employees.filter(employee => ids.includes(employee.id));
};

function employeeByName(employeeName) {
  const expected = {};
  if (employeeName === undefined) {
    return expected;
  }
  const employName = data.employees
  .find(info => info.firstName === employeeName || info.lastName === employeeName);
  return employName;
};


function managersForEmployee(idOrName) {
  // seu código aqui
};

function procuraNome(element) {
  return element.responsibleFor
  .map(responsible => data.animals
  .find(animal => animal.id === responsible).name)
}

function employeeCoverage(idOrName) {
  if (idOrName === undefined) {
    const reducto = data.employees.reduce((emptyInitial, valueActual) => {
      emptyInitial[`${valueActual.firstName} ${valueActual.lastName}`] = procuraNome(valueActual)
      return emptyInitial
    }, {})
    return reducto
  }
  const name = data.employees
    .find(employ => employ.id === idOrName || employ.firstName === idOrName ||
      employ.lastName === idOrName)
  const animalFiltered = procuraNome(name);
  const finalResult = {}
  finalResult[`${name.firstName} ${name.lastName}`] = animalFiltered
  return finalResult
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employer = {}
  employer.id = id;
  employer.firstName = firstName;
  employer.lastName = lastName;
  employer.managers = managers;
  employer.responsibleFor = responsibleFor;

  data.employees.push(employer);
}

function isManager(id) {
  const result = data.employees.filter(info => info.managers.includes(id));
  if (result.length !== 0) {
    return true
  }
  return false
}

function animalsOlderThan(animal, age) {
  const bichos = data.animals.find(animais => animais.name === animal);
  return bichos.residents.every(bicho => bicho.age >= age);
}

function oldestFromFirstSpecies(idEmployee) {
  const employer = data.employees.filter(info => info.id === idEmployee)[0].responsibleFor;
  const filteredAnimals = employer.map(element => data.animals
    .find(infoId => infoId.id === element))[0].residents
    .sort((maisNovo, maisVelho) => maisVelho.age - maisNovo.age);
  const [arr] = filteredAnimals
  const { name, sex, age } = arr
  return [name, sex, age]
}

function increasePrices(percentage) {
  const adulto = data.prices.Adult + ((data.prices.Adult * percentage) / 100);
  const senior = data.prices.Senior + ((data.prices.Senior * percentage) / 100);
  const child = data.prices.Child + ((data.prices.Child * percentage) / 100);

  data.prices.Adult = Math.round(adulto * 100) / 100;
  data.prices.Senior = Math.round(senior * 100) / 100;
  data.prices.Child = Math.round(child * 100) / 100;
}

class Animal {
  constructor(name = '', age = Number, sex = 'male', species = '') {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.species = species.slice(0, -1);
    Animal.contador += 1
  }

  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`
  }

  static totalAnimals() {
    return Animal.contador;
  }
}

Animal.contador = 0

function createAnimals() {
  const arrayAnimais = []
  data.animals.forEach(animal => animal.residents
  .forEach(resident => arrayAnimais
  .push(new Animal(resident.name, resident.age, resident.sex, animal.name))));
  return arrayAnimais
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith }
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

const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined || Object.getOwnPropertyNames(entrants).length === 0) {
    return 0;
  }
  const adultsPriceCalculator = entrants.Adult * data.prices.Adult;
  const seniorsPriceCalculator = entrants.Senior * data.prices.Senior;
  const childrenPriceCalculator = entrants.Child * data.prices.Child;
  return adultsPriceCalculator + seniorsPriceCalculator + childrenPriceCalculator;
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
  const allAnimals = data.animals;
  if (species === undefined) {
    const newAnimalCountObj = allAnimals.reduce((accumulator, current) => {
      accumulator[current.name] = current.residents.length;
      return accumulator;
    }, {})
    return newAnimalCountObj;
  }
  for (let i = 0; i < allAnimals.length; i += 1) {
    if (allAnimals[i].name === species) return allAnimals[i].residents.length;
  }
  return false;
};

// função que retorna animais categorizados por localização
function reduceAnimalMapLoc() {
  return data.animals.reduce((acc, cur) => {
    if (acc[cur.location] === undefined) {
      acc[cur.location] = [];
    }
    acc[cur.location] = [...acc[cur.location], cur.name]
    return acc;
  }, {})
}

// função que retorna nomes de animais ordenados
function reduceAnimalMapSort() {
  return data.animals.reduce((acc, cur) => {
    if (acc[cur.location] === undefined) {
      acc[cur.location] = [];
    }
    acc[cur.location] =
      [...acc[cur.location], { [cur.name]: cur.residents.map(element => element.name).sort() }]
    return acc;
  }, {})
}

// função que retorna nomes de animais ordenados
function reduceAnimalMapNames() {
  return data.animals.reduce((acc, cur) => {
    if (acc[cur.location] === undefined) {
      acc[cur.location] = [];
    }
    acc[cur.location] =
      [...acc[cur.location], { [cur.name]: cur.residents.map(element => element.name) }]
    return acc;
  }, {})
}

function animalMap(options) {
  if (!options || !options.includeNames) {
    return reduceAnimalMapLoc();
  } else if (options.sorted && options.includeNames) {
    return reduceAnimalMapSort();
  } else if (options.sex) {
    return data.animals.reduce((acc, cur) => {
      if (acc[cur.location] === undefined) {
        acc[cur.location] = [];
      }
      acc[cur.location] =
      [...acc[cur.location],
        { [cur.name]: cur.residents
        .filter(animal => animal.sex === options.sex).map(element => element.name) }]
      return acc;
    }, {})
  }
  return reduceAnimalMapNames();
};

function animalPopularity(rating) {
  // não há arquivo de teste
};

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return ids.map(item => data.animals.find(obj => obj.id === item))
};

function animalByName(animalName) {
  // não há arquivo de teste
};

function employeesByIds(ids) {
  // não há arquivo de teste
};

function employeeByName(employeeName = {}) {
  // const allEmployees = [...data.employees];
  // for (let i = 0; i < allEmployees.length; i += 1) {
  //   if (allEmployees[i].firstName === employeeName || allEmployees[i].lastName === employeeName) 
  //     return allEmployees[i];
  // }
  // return employeeName;
  if (employeeName.length > 0) {
    return data.employees.reduce((acc, cur) => 
    acc.firstName === employeeName || acc.lastName === employeeName ? acc : cur);
  }
  return employeeName;
};

function managersForEmployee(idOrName) {
  // não há arquivo de teste
};

function employeeCoverage(idOrName) {
  // seu código aqui
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  }
  const allEmployees = data.employees;
  allEmployees.push(newEmployee);
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
  const percentageCalc = percentage / 100;
  const adultsPriceIncrease = data.prices.Adult + (percentageCalc * data.prices.Adult);
  const seniorsPriceIncrease = data.prices.Senior + (percentageCalc * data.prices.Senior);
  const childrenPriceIncrease = data.prices.Child + (percentageCalc * data.prices.Child);
  data.prices.Adult = Math.ceil(adultsPriceIncrease * 100) / 100;
  data.prices.Senior = Math.ceil(seniorsPriceIncrease * 100) / 100;
  data.prices.Child = Math.ceil(childrenPriceIncrease * 100) / 100;
  return data.prices;
}

class Animal {
  // static contador = 0;
  constructor(name = '', age = 0, sex = 'male', species = '') {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.species = species.slice(0, -1);
    Animal.contador += 1;
  }

  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`;
  }

  static totalAnimals() {
    return Animal.contador;
  }
}
Animal.contador = 0;

function createAnimals() {
  const allAnimals = [];
  data.animals.forEach((animal) => {
    animal.residents.forEach((item) => {
      allAnimals.push(new Animal(item.name, item.age, item.sex, animal.name));
    })
  })
  return allAnimals;
}

function createEmployee(personalInfo, associatedWith) {
  const employee = { ...personalInfo, ...associatedWith };
  return employee;
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

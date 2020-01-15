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

function animalMap(options) {
  // const locations = {'NE':[], 'NW':[], 'SE':[], 'SW':[]}
  // const arrFinal = data.animals.reduce ( (arr, cur) => ({
  // ...arr, [cur.location]:species(cur.location)
  // }),{})
  // arraySpecies(locations);
  // console.log (arrFinal);
  
  // const arr1 = [];
  // const arr2 = [];
  // const arr3 = [];
  // const arr4 = [];
  // data.animals.forEach((element) => {
  //   if (element.location === 'NE') {
  //     return arr1.push(element.name);
  //   }

  //   if (element.location === 'NW') {
  //     return arr2.push(element.name);
  //   }

  //   if (element.location === 'SE') {
  //     return (arr3.push(element.name));
  //   }
    
  //   if (element.location === 'SW') {
  //     return arr4.push(element.name);
  //   }
  // })
  
  // console.log(arr1, arr2, arr3, arr4)
};
// const names = (string) => {

// }
// const locations = {'NE':[], 'NW':[], 'SE':[], 'SW':[]}

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
  const allEmployees = [...data.employees];
  for (let i = 0; i < allEmployees.length; i += 1) {
    if (allEmployees[i].firstName === employeeName) return allEmployees[i];
    else if (allEmployees[i].lastName === employeeName) return allEmployees[i];
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

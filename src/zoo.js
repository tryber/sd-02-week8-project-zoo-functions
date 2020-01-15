const assert = require('assert');
const data = require('./data');
const round = require('../libs/round');


function entryCalculator(entrants) {
  if(typeof entrants === 'undefined') {return 0;}
  if(Object.entries(entrants).length === 0 ){ return 0;}

  let total = 0;
  Object.entries(data.prices).forEach((key) => {
    total += entrants[key[0]] * key[1];
  });
  return total;
};

function schedule(dayName) {
  let hours = {};
  if(typeof dayName === 'undefined') {
    Object.entries(data.hours).forEach((key) => {
      hours[key[0]] = `Open from ${key[1].open}am until ${key[1].close-12}pm`;
    });
  } else {
    hours[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close-12}pm`
  }
  hours['Monday'] ? hours['Monday'] = 'CLOSED' : console.log()
  return hours;
};


function animalCount(species) {
  const animals = {};
  data.animals.forEach((animal) => {
    animals[animal.name] = animal.residents.length
  });

  if(typeof species === 'undefined') {
    return animals;
  } else {
    return {}[species] = animals[species];
  }
};

function animalMap(options) {
  const locations = {};
  const names = {};

  Object.assign(locations,
    data.animals.reduce(funcao1,{'NE':[], 'NW':[], 'SE': [], 'SW': []})
  );

  if(typeof options === 'undefined') {
    return locations;
  }

  Object.assign(names,
    data.animals.reduce(funcao2(options), {})
  );

  if( options.includeNames ) {
    let coisa = Object.assign({}, locations);
    Object.entries(locations).forEach((key) => {
      locations[key[0]].forEach((animal, index) => {
        const obj = {};
        obj[animal] = names[animal];
        locations[key[0]][index] = obj;
      });
    });
  }
  return locations;
};

const funcao2 = (options) => (acc, val) => {
  let array = [...val.residents];
  if(options.hasOwnProperty('sex')) {
    array = array.filter((item) => item.sex === options.sex);
  }
  if(options.hasOwnProperty('sorted') && options.sorted === true) {
    array = array.sort((a, b) => {return a.name < b.name ? -1 : a.name > b.name ? 1 : 0});
  }
  array = array.map((item) => item.name);
  acc[val.name] = array;
  return acc;
};

const funcao1 = (acc, val) => {
  acc[val.location] = [...acc[val.location], val.name]
  return acc;
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  let array = [];
  ids.forEach((id) => {
    array = [...array,...data.animals.filter((item) => item.id == id)];
  });
  return array;
};

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(employeeName) {
  if(typeof employeeName === 'undefined') {return {};}
  return [...data.employees.filter((item) =>
    item.firstName == employeeName || item.lastName == employeeName)][0];
}

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  const responsaveisId = {};
  let responsaveis = {};
  let selecionados = [];
  const regexId = /[\-A -Za -z0 - 9]{36}/;
  const regexName = /[A-Za-z]{4,}/;

  data.employees.forEach((employee) => {
    responsaveisId[`${employee.id}`] =
      employee.responsibleFor.map((id) =>
        data.animals.find((animal) => animal.id === id)
      );
  });

  if(typeof idOrName === 'undefined' || regexName.test(idOrName)) {
    coverageFuncao1(responsaveisId, selecionados);
  }

  if(regexId.test(idOrName)) {
    coverageFuncao2(responsaveisId, selecionados);
  }

  selecionados.forEach((obj) => {
    Object.keys(obj).forEach(function(k) {
      let { firstName, lastName } = data.employees.find((employee) => employee.id === k);
      let animals = obj[k].map((animal) => animal.name);

      responsaveis[`${firstName} ${lastName}`] = animals;
    });
  });

  if(regexName.test(idOrName)) {
    coverageFuncao3(responsaveis, idOrName);
  }

  return responsaveis;
};

const coverageFuncao1 = (responsaveisId, selecionados) => {
  Object.keys(responsaveisId).forEach((key) => {
    const newObj = {};
    newObj[key] = responsaveisId[key];
    selecionados.push(newObj);
  });
}

const coverageFuncao2 = (responsaveisId, selecionados) => {
  Object.keys(responsaveisId).forEach((key) => {
    const newObj = {};
    if(key === idOrName) {
      newObj[key] = responsaveisId[key];
      selecionados.push(newObj);
    }
  });
}

const coverageFuncao3 = (responsaveis, idOrName) => {
  Object.keys(responsaveis).forEach(function(k) {
    let array = k.split(' ');
    if(array.some((item) => item === idOrName)) {
      const key = k;
      const array = responsaveis[k];
      responsaveis = {};
      responsaveis[key] = array;
    }
  });
}

console.log(employeeCoverage());

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newObj = {id, firstName, lastName, managers, responsibleFor };

  data.employees.push(newObj);
}

function isManager(id) {
  let boolean = false;
  data.employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if(manager === id) boolean = true;
    });
  });
  return boolean;
}

function animalsOlderThan(animal, age) {
  let array = [];
  array = [...data.animals.filter((item) => item.name == animal)];
  return array[0].residents.every((item) =>
    item.age > age
  );
}

function oldestFromFirstSpecies(id) {
  const employee = data.employees.find((employee) => employee.id === id);
  const animalId = employee.responsibleFor[0];
  const animals = data.animals.find((animal) => animal.id === animalId);

  const animal = animals.residents.reduce((acc, currentValue, index, array) => {
    if(acc.age < currentValue.age){
      Object.assign(acc,currentValue);
    }
    return acc;
  }, {age: 0})
  const {name, sex, age} = animal;
  const array = [name, sex, age];

  return array;
}

function increasePrices(percentage) {
  const fator = (percentage / 100) + 1;
  Object.keys(data.prices).forEach((key) => data.prices[key] = round(data.prices[key]*fator, 2));
}

class Animal {
  static qt = 0;
  constructor(name, sex, age, species) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species;
    Animal.qt += 1;
  }

  static totalAnimals() {
    return Animal.qt;
  }

  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`
  }
}

function createAnimals() {
  const animals = [];
  data.animals.forEach((specie) => {
    const string = specie.name;
    const species = string.substr(0, specie.name.length - 1);
    specie.residents.forEach((animal) => {
      const {name, sex, age} = animal;
      animals.push(new Animal(name,sex, age, species));
    });
  });
  return animals;
}

function createEmployee(personalInfo, associatedWith) {
  const employee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastname: personalInfo.lastname,
    managers: [...associatedWith['managers']],
    responsibleFor: [...associatedWith['responsibleFor']]
  };
  data.employees.push(employee);
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

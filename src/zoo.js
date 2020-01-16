const data = require('./data')

const entryCalculator = (...args) => {
  const { Adult: PriceAdults, Senior: PriceSenior, Child: PriceChild } = data.prices;
  if (args[0] === null || args[0] === undefined) {
    return args;
  } else if (Object.keys(args[0]).length === 0) {
    return 0;
  }
  const [{ Adult, Child, Senior }] = args;
  return (Adult * PriceAdults) + (Senior * PriceSenior) + (Child * PriceChild);
};

const schedule = (dayName) => {
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

const animalCount = (species) => {
  const [...args] = data.animals;
  const arrFinal = args.reduce((acc, cur) =>
    ({ ...acc, [cur.name]: cur.residents.length }), {})
  if (species === null || species === undefined) {
    return arrFinal;
  }
  return arrFinal[species];
};
function primeiroAssert() {
  return data.animals.reduce((arr, cur) => {
    if (arr[cur.location] === undefined) {
      arr[cur.location] = [];
    }
    arr[cur.location] = [...arr[cur.location], cur.name]
    return arr;
  }, {})
}

function segundoAssert(sort) {
  if (sort) {
    return data.animals.reduce((acc, cur) => {
      if (acc[cur.location] === undefined) {
        acc[cur.location] = [];
      }
      acc[cur.location] = [...acc[cur.location], {
        [cur.name]: cur.residents.map(el =>
          el.name).sort()
      }]
      return acc;
    }, {})
  }
  return data.animals.reduce((acc, cur) => {
    if (acc[cur.location] === undefined) {
      acc[cur.location] = [];
    }
    acc[cur.location] = [...acc[cur.location], {
      [cur.name]: cur.residents.map(el =>
        el.name)
    }]
    return acc;
  }, {})
}

function terceiroAssert(value) {
  return data.animals.reduce((acc, cur) => {
    if (acc[cur.location] === undefined) {
      acc[cur.location] = [];
    }
    acc[cur.location] = [...acc[cur.location], {
      [cur.name]: cur.residents.filter(el =>
        el.sex === value).map(ele => ele.name)
    }]
    return acc;
  }, {})
}

function animalMap(options) {
  if (!options || !options.includeNames) return primeiroAssert();
  if (options.sorted) return segundoAssert(options.sorted);
  else if (options.sex) return terceiroAssert(options.sex);
  return segundoAssert(options.sorted);
};

function animalPopularity(rating) {

};

function animalsByIds(...ids) {
  if (ids[0] === undefined) {
    return [];
  }
  const arrFinal = ids.reduce((arr, cur) => ([
    ...arr, data.animals.find(el => el.id === cur)
  ]), [])
  return arrFinal;
};

function animalByName(animalName) {

};

function employeesByIds(ids) {

};

function employeeByName(names = {}) {
  if (names[0] !== undefined) {
    names = data.employees.find(el => el.lastName === names || el.firstName === names)
  }
  return names;
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(str) {
  if (str === undefined) {
    return (data.employees.reduce((arr, cur) => {
      arr[`${cur.firstName} ${cur.lastName}`] = cur.responsibleFor.map(ele =>
        data.animals.find(el => el.id === ele).name)
      return arr
    }, {}))
  }
  const arrai = data.employees.find(el =>
    str === el.id || str === el.firstName || str === el.lastName);
  const arrFinal = arrai.responsibleFor.map(ele => data.animals.find(el =>
    ele === el.id).name);
  return { [`${arrai.firstName} ${arrai.lastName}`]: arrFinal };
};


function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function isManager(id) {
  return data.employees.some(ele => ele.managers.some(el => el === id))
}

function animalsOlderThan(animal, age) {
  return data.animals.find(specie =>
    specie.name === animal).residents.every(animalAge => animalAge.age >= age);
}

function oldestFromFirstSpecies(id) {
  const specie = data.employees.find(ele => ele.id === id).responsibleFor[0];
  return Object.values((data.animals.find(el =>
    el.id === specie)).residents.sort((a, b) =>
      b.age - a.age)[0])
}

function increasePrices(percentage) {
  const value = ((percentage / 100) + 1) * 100;
  const [adultPrices, seniorPrices, childPrices] = Object.values (data.prices);
  data.prices.Adult = Math.ceil(adultPrices * value) / 100;
  data.prices.Child = Math.ceil(childPrices * value) / 100;
  data.prices.Senior = Math.ceil(seniorPrices * value) / 100;
}

class Animal {
  constructor(name = '', sex = 'male', age = 0, species = '') {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species.slice(0, -1);
  }
  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`
  }
  static get Total() {
    return this.total;
  }
  static set Total(v) {
    this.total = v;
  }
  static totalAnimals() {
    return this.total;
  }
}

function createAnimals() {
  const animals = [];
  data.animals.forEach((animais) => {
    animais.residents.forEach((el) => {
      animals.push(new Animal(el.name, el.sex, el.age, animais.name));
    })
  })
  Animal.Total = animals.length;
  return animals;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
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

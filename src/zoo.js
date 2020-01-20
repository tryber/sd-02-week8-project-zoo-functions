const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.values(entrants).length === 0) {
    return 0;
  }
  const {
    Child,
    Adult,
    Senior
  } = entrants;
  const {
    Child: childPrices,
    Adult: adultPrices,
    Senior: seniorPrices
  } = data.prices;
  return (Child * childPrices) + (Adult * adultPrices) + (Senior * seniorPrices);
};

function schedule(dayName) {
  // seu código aqui
  const days = dayName ? [dayName] : Object.keys(data.hours);
  return days.reduce((acc, day) => {
    const {
      open,
      close
    } = data.hours[day];
    const text = day === 'Monday' ?
      'CLOSED' :
      `Open from ${open}am until ${close - 12}pm`
    acc[day] = text;
    return acc;
  }, {});
};

const catchingAnimals = (who, howMany) => {
  const animal = {};
  for (let i = 0; i < who.length; i += 1) {
    animal[who[i]] = howMany[i];
  }
  return animal;
}

function animalCount(species) {
  // seu código aqui
  const names = data.animals.map(element => element.name);
  const quantity = data.animals.map(element => element.residents.length);
  const zooList = catchingAnimals(names, quantity);

  if (species === undefined) {
    return zooList;
  }
  return zooList[species];
}

function animalsFilteredBySex(animals, sex) {
  if (!sex) return animals
  return animals.filter(({
    sex: animalSex
  }) => sex === animalSex)
}

function sortedAnimalNames(animalNames, sorted) {
  if (!sorted) return animalNames
  return animalNames.sort()
}

function animalMap(options = {}) {
  const {
    includeNames,
    sex,
    sorted
  } = options
  return data.animals.reduce((obj, animal) => {
    const result = obj
    const animalsInLocation = obj[animal.location] || []
    if (!includeNames) {
      result[animal.location] = [...animalsInLocation, animal.name]
      return result
    }
    let animals = animal.residents
    animals = animalsFilteredBySex(animals, sex)
    let animalNames = animals.map(({
      name
    }) => name)
    animalNames = sortedAnimalNames(animalNames, sorted)
    result[animal.location] = [...animalsInLocation, {
      [animal.name]: animalNames
    }]
    return result
  }, {})
};

function animalPopularity(rating) {
  // seu código aqui
  // Não há testes implementados para essa função.
};

function animalsByIds(ids, id2 = '') {
  // seu código aqui
  const nothing = [];
  if (ids && id2 === undefined) {
    return nothing
  }
  // com um único id, retorna os animais com este id
  // com mais de um id, retorna os animais que têm um desses ids
  const findOne = data.animals.filter(animal => animal.id === ids);
  const findSome = data.animals.filter(animal => animal.id === id2);
  return findOne.concat(findSome);
};


function animalByName(animalName) {
  // seu código aqui
  // Não há testes implementados para essa função.
};

function employeesByIds(ids) {
  // seu código aqui
  // Não há testes implementados para essa função.
};

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(element =>
    employeeName === element.firstName || employeeName === element.lastName);
};

function managersForEmployee(idOrName) {
  // seu código aqui
  // Não há testes implementados para essa função.
};

function employeeCoverage(resp) {
  // seu código aqui
  if (resp === undefined) {
    return (data.employees.reduce((arr, cur) => {
      arr[`${cur.firstName} ${cur.lastName}`] = cur.responsibleFor.map(ele =>
        data.animals.find(el => el.id === ele).name)
      return arr
    }, {}))
  }
  const namelist = data.employees.find(el =>
    resp === el.id || resp === el.firstName || resp === el.lastName);
  const arrFinal = namelist.responsibleFor.map(ele => data.animals.find(el =>
    ele === el.id).name);
  return {
    [`${namelist.firstName} ${namelist.lastName}`]: arrFinal
  };
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  })
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(algum => algum.managers.some(alguem => alguem === id))
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find(who =>
    who.name === animal).residents.every(hisAge => hisAge.age >= age);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const animalsEmp = data.employees.find(pesq => pesq.id === id).responsibleFor[0];
  const result = data.animals.find(animal => animal.id === animalsEmp);
  const older = result.residents.sort((young, old) => old.age - young.age)[0];
  return Object.values(older)
}

function increasePrices(percentage) {
  // seu código aqui
  const valor = ((percentage / 100) + 1) * 100;
  const [adultPrices, seniorPrices, childPrices] = Object.values(data.prices);
  data.prices.Adult = Math.ceil(adultPrices * valor) / 100;
  data.prices.Senior = Math.ceil(seniorPrices * valor) / 100;
  data.prices.Child = Math.ceil(childPrices * valor) / 100;
}

class Animal {
  // seu código aqui
  constructor(name, sex, age, species) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species;

    Animal.counter += 1;
  }

  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`;
  }

  static totalAnimals() {
    return Animal.counter;
  }
}

Animal.counter = 0;

function createAnimals() {
  // seu código aqui
  const eachAnimals = data.animals.map(item => item.residents);

  const eachSpecies = data.animals.map(item =>
    item.name.substr(0, item.name.length - 1));

  const objetos = [];
  for (let i = 0; i < eachSpecies.length; i += 1) {
    eachAnimals[i].forEach((animal) => {
      animal.species = eachSpecies[i];
    });

    objetos[i] = eachAnimals[i];
  }

  const spreadedObj = objetos.reduce((accum, item) => [...accum, ...item], []);

  const classObj = spreadedObj.map(object =>
    new Animal(object.name, object.sex, object.age, object.species));

  return classObj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith
  };
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

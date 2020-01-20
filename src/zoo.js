const data = require('./data')

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const { Adult: multA = 0, Child: multC = 0, Senior: multS = 0 } = entrants;
  const { Adult, Senior, Child } = data.prices;
  return Math.round(((Adult * multA) + (Child * multC) + (Senior * multS)) * 100) / 100;
};

function schedule(dayName) {
  // seu código aqui
  const days = dayName ? [dayName] : Object.keys(data.hours);

  return days.reduce((acc, day) => {
    const { open, close } = data.hours[day];
    const text = day === 'Monday' ?
      'CLOSED' :
      `Open from ${open}am until ${close - 12}pm`
    acc[day] = text;
    return acc;
  }, {});
};

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    const animaisTodos = {};
    data.animals.forEach((element) => {
      animaisTodos[element.name] = element.residents.length;
      return null
    });
    return animaisTodos
  }
  const animalCountFinder = data.animals.find(element => element.name === species);
  return animalCountFinder.residents.length;
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
  // seu código aqui
  if (!options || !options.includeNames) return primeiroAssert();
  if (options.sorted) return segundoAssert(options.sorted);
  else if (options.sex) return terceiroAssert(options.sex);
  return segundoAssert(options.sorted);
};


function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  const animaisPorId = [];
  if (ids === undefined) return animaisPorId;
  ids.map(idsArr => animaisPorId.push(data.animals.find(dataItem => dataItem.id === idsArr)));
  return animaisPorId;
};

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(empName) {
  // seu código aqui
  if (empName === undefined) return {}
  return data.employees.find(pesq => pesq.firstName === empName || pesq.lastName === empName);
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  if (idOrName === undefined) {
    return (data.employees.reduce((acum, atual) => {
      acum[`${atual.firstName} ${atual.lastName}`] = atual.responsibleFor.map(ele =>
        data.animals.find(el => el.id === ele).name)
      return acum
    }, {}))
  }
  const keyObj = data.employees.find(el =>
    idOrName === el.id || idOrName === el.firstName || idOrName === el.lastName);
  const valueObj = keyObj.responsibleFor.map(ele => data.animals.find(el =>
    ele === el.id).name);
  return { [`${keyObj.firstName} ${keyObj.lastName}`]: valueObj };
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const ultimoEmp = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(ultimoEmp);
}

function isManager(id) {
  // seu código aqui
  const filtro = data.employees.filter(src => src.managers.includes(id));
  return filtro.length !== 0;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const speciesItem = data.animals.find(dataItem => dataItem.name === animal);
  return speciesItem.residents.every(element => element.age >= age);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const funcFind = data.employees.find(itemF => itemF.id === id);
  const aniFind = data.animals.find(itemA => itemA.id === funcFind.responsibleFor[0]);
  let arrAges = aniFind.residents.map(item => item.age);
  arrAges = arrAges.sort((min, max) => max - min);
  const [maxAge, ...others] = arrAges;
  const objResp = aniFind.residents.find(itemZ => itemZ.age === maxAge);
  const { name, sex, age } = objResp;
  return [name, sex, age]
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = data.prices;
  const decConvPercentage = parseFloat((percentage / 100).toFixed(3));
  const passDataPrices = {
    Adult: Math.round((Adult * (1 + decConvPercentage) * 100)) / 100,
    Senior: Math.round((Senior * (1 + decConvPercentage) * 100)) / 100,
    Child: Math.round((Child * (1 + decConvPercentage) * 100)) / 100
  }
  data.prices = passDataPrices;
}

class Animal {
  // seu código aqui
  constructor(name = '', sex = 'male', age = 0, species = '') {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species.slice(0, -1);
    Animal.contador += 1;
  }
  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`
  }
  static totalAnimals() {
    return Animal.contador;
  }
}
Animal.contador = 0;

function createAnimals() {
  // seu código aqui
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
  // seu código aqui
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

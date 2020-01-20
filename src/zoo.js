const data = require('./data')

function entryCalculator(entrants) {
  // retorna 0 se nenhum argumento for passado
  if (entrants === undefined) {
    return 0;
  }
  // retorna 0 se um objeto vazio for passado
  if (Object.values(entrants).length === 0) {
    return 0;
  }
  // retorna o preço total a ser cobrado dado o número de adultos, crianças e
  // idosos
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
  // sem parâmetros, retorna um cronograma legível para humanos
  // se um único dia for passado, retorna somente este dia em um formato
  // legível para humanos
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
  // Sem parâmetros, retorna animais e suas quantidades
  const names = data.animals.map(element => element.name);
  const quantity = data.animals.map(element => element.residents.length);
  const zooList = catchingAnimals(names, quantity);

  if (species === undefined) {
    return zooList;
  }

  // com o nome de uma espécide de animal, retorna somente a quantidade
  return zooList[species];
}

function animalMap(options) {
  // seu código aqui
  // sem parâmetros, retorna animais categorizados por localização
  // com opções especificadas, retorna nomes de animais
  // com opções especificadas, retorna nomes de animais ordenados
  // com oções especificadas, retorna somente nomes de animais macho/fêmea
  // só retorna informações específicas de gênero se includeNames for setado
};

function animalPopularity(rating) {
  // seu código aqui
  // Não há testes implementados para essa função.
};

function animalsByIds(ids, id2 = '') {
  // seu código aqui
  // sem parâmetros, retorna um array vazio
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
  // sem parâmetros, retorna um objeto vazio
  if (employeeName === undefined) {
    return {};
  }
  // quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // quando provido o último nome do funcionário, retorna o objeto do funcionário
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
  // adiciona um funcionário no fim da lista
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
  // testa se o id passado é de um gerente
  return data.employees.some(algum => algum.managers.some(alguem => alguem === id))
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  // passados o nome de uma espécie e uma idade, testa se todos os animais desta
  // espécie possuem a idade mínima especificada (todos = every)
  return data.animals.find(who =>
    who.name === animal).residents.every(hisAge => hisAge.age >= age);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  // passado o id de um funcionário, encontra a primeira espécie de animal
  // gerenciado pelo funcionáio, e retorna um array com nome, sexo e idade do
  // animal mais velho dessa espécie
  const animalsEmp = data.employees.find(pesq => pesq.id === id).responsibleFor[0];
  const result = data.animals.find(animal => animal.id === animalsEmp);
  const older = result.residents.sort((young, old) => old.age - young.age)[0];
  return Object.values(older)
}

function increasePrices(percentage) {
  // seu código aqui
  // data uma porcentagem, incrementa todos os preços, arrendondados em duas casas
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

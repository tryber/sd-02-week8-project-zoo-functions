const data = require('./data')

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined) {
    return 0;
  }

  if (Object.keys(entrants).length === 0) {
    return 0;
  }

  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;
  const { Adult, Child, Senior } = entrants;

  return (Adult * adultPrice) + (Child * childPrice) + (Senior * seniorPrice);
};
// console.log(entryCalculator());
// console.log({} === {})

function schedule(dayName) {
  // seu código aqui
  const horarios = Object.entries(data.hours);

  // const dias = Object.keys(data.hours);
  // const horarios = Object.values(data.hours)

  const cronogramaLegivel = horarios.reduce((acumulado, item) => {
    if (item[0] === 'Monday') {
      acumulado[item[0]] = 'CLOSED';
    } else {
      acumulado[item[0]] = `Open from ${item[1].open}am until ${item[1].close - 12}pm`;
    }

    return acumulado;
  }, {});

  // const {
  //   Tuesday: { open: openTu, close: closeTu },
  //   Wednesday: { open: openWe, close: closeWe },
  //   Thursday: { open: openTh, close: closeTh },
  //   Friday: { open: openFr, close: closeFr },
  //   Saturday: { open: openSa, close: closeSa },
  //   Sunday: { open: openSu, close: closeSu }
  // 'Monday': { open: openMo, close: closeMo }
  // } = data.hours
  // const cronogramaLegivel = {
  //   Tuesday: `Open from ${openTu}am until ${closeTu - 12}pm`,
  //   Wednesday: `Open from ${openWe}am until ${closeWe - 12}pm`,
  //   Thursday: `Open from ${openTh}am until ${closeTh - 12}pm`,
  //   Friday: `Open from ${openFr}am until ${closeFr - 12}pm`,
  //   Saturday: `Open from ${openSa}am until ${closeSa - 12}pm`,
  //   Sunday: `Open from ${openSu}am until ${closeSu - 12}pm`,
  //   Monday: 'CLOSED'
  // }

  if (dayName === undefined) {
    return cronogramaLegivel;
  }

  // const indice = Object.keys(cronogramaLegivel).indexOf(dayName);
  // const keyValue = Object.entries(cronogramaLegivel)[indice];

  return { [dayName]: cronogramaLegivel[dayName] };
};
// console.log(schedule())


const transformaArraysEmObjeto = (keys, values) => {
  const objeto = {};
  for (let i = 0; i < keys.length; i += 1) {
    objeto[keys[i]] = values[i];
  }

  return objeto;
}

function animalCount(species) {
  // seu código aqui
  const names = data.animals.map(item => item.name);
  const quantities = data.animals.map(item => item.residents.length);

  // const resultado = {};
  // for (let i = 0; i < names.length; i += 1) {
  //   resultado[names[i]] = quantities[i];
  // }

  const resultado = transformaArraysEmObjeto(names, quantities);

  if (species === undefined) {
    return resultado;
  }

  return resultado[species];
};
// console.log(animalCount())

const filtraPorRegiao = (regiao) => {
  const itensFiltrados = data.animals.filter(item => item.location === regiao);
  return itensFiltrados.map(item => item.name);
};

const retornaNomes = (animal, sorted, sex) => {
  let residentes = data.animals.find(item => item.name === animal).residents;

  if (sex === 'female') {
    residentes = residentes.filter(item => item.sex === 'female');
  }

  const arrayNomes = residentes.map(item => item.name);

  if (sorted) {
    return arrayNomes.sort();
  }

  return arrayNomes;
}

function animalMap(options) {
  // seu código aqui
  const regioes = ['NE', 'NW', 'SE', 'SW'];
  const animaisPorRegiaoArray = regioes.map(regiao => filtraPorRegiao(regiao));

  // const animaisPorRegiao = [ filtraPorRegiao('NE'), filtraPorRegiao('NW'),
  // filtraPorRegiao('SE'), filtraPorRegiao('SW') ];

  let [NE, NW, SE, SW] = animaisPorRegiaoArray;
  const animaisPorRegiaoObjeto = { NE, NW, SE, SW };

  // const animaisPorLocalizacao = {
  //   NE: filtraPorRegiao('NE'),
  //   NW: filtraPorRegiao('NW'),
  //   SE: filtraPorRegiao('SE'),
  //   SW: filtraPorRegiao('SW')
  // };

  if (options === undefined) {
    return animaisPorRegiaoObjeto;
  }

  const { includeNames = false, sorted = false, sex = undefined } = options;

  // const retornaNomes = (animal, sorted, sex) => {
  //   let residentes = data.animals.find(item => item.name === animal).residents;
  //   if (sex === 'female') {
  //     residentes = residentes.filter(item => item.sex === 'female');
  //   }
  //   const arrayNomes = residentes.map(item => item.name);
  //   if (sorted) {
  //     return arrayNomes.sort();
  //   }
  //   return arrayNomes;
  // }
    //   return residentes.map(item => item.name);
    // }
    // if (sorted) {
    //   return residentes.map(item => item.name).sort();
    // }
    // return residentes.map(item => item.name);

  const adicionaNomes = animais =>
    animais.map(item => ({ [item]: retornaNomes(item, sorted, sex) }));

    // let nomes;
    // if (sex === 'female') {
    //   nomes = array.map((item) => ({ [item] :  }));
    // }
    // if (sorted) {
    //   nomes = array.map((item) => ({ [item] : retornaNomes(item).sort() }));
    // } else {
    //   nomes = array.map((item) => ({ [item] : retornaNomes(item) }));
    // }
    // return nomes;
  // if (includeNames && sorted) {
  //   return {
  //     NE: adicionaNomes(filtraPorRegiao('NE')),
  //     NW: adicionaNomes(filtraPorRegiao('NW')),
  //     SE: adicionaNomes(filtraPorRegiao('SE')),
  //     SW: adicionaNomes(filtraPorRegiao('SW'))
  //   };
  // }
  // if (includeNames && sex === 'female') {
  //   return {
  //     NE: adicionaNomes(filtraPorRegiao('NE')),
  //     NW: adicionaNomes(filtraPorRegiao('NW')),
  //     SE: adicionaNomes(filtraPorRegiao('SE')),
  //     SW: adicionaNomes(filtraPorRegiao('SW'))
  //   };
  // }

  if (includeNames) {
    [NE, NW, SE, SW] = regioes.map(regiao => adicionaNomes(filtraPorRegiao(regiao), sorted, sex));
    return { NE, NW, SE, SW }
  }

    // return {
    //   NE: adicionaNomes(filtraPorRegiao('NE')),
    //   NW: adicionaNomes(filtraPorRegiao('NW')),
    //   SE: adicionaNomes(filtraPorRegiao('SE')),
    //   SW: adicionaNomes(filtraPorRegiao('SW'))
    // };

  return animaisPorRegiaoObjeto;
};
// console.log(animalMap({includeNames: true})['NW'][1])

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  // seu código aqui
  if (ids === undefined) {
    return [];
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
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }

  return data.employees.find(item =>
    employeeName === item.firstName || employeeName === item.lastName)
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  // seu código aqui
  const primeirosNomes = data.employees.map(item => item.firstName);
  const ultimosNomes = data.employees.map(item => item.lastName);

  const nomesCompletos = [];
  for (let i = 0; i < primeirosNomes.length; i += 1) {
    nomesCompletos[i] = `${primeirosNomes[i]} ${ultimosNomes[i]}`;
  }

  const responsavelpor = data.employees.map(item => item.responsibleFor.map(id =>
    animalsByIds(id)[0].name));

  // let resultado = {};
  // for (let i = 0; i < nomesCompletos.length; i += 1) {
  //   resultado[nomesCompletos[i]] = responsavelpor[i];
  // }

  let resultado = transformaArraysEmObjeto(nomesCompletos, responsavelpor);

  if (idOrName === undefined) {
    return resultado;
  }

  const objetoResultado = data.employees.find(item =>
  idOrName === item.id || idOrName === item.firstName || idOrName === item.lastName);

  Object.keys(resultado).forEach((key, index) => {
    if (key.split(' ')[0] === objetoResultado.firstName || key.split(' ')[1] === objetoResultado.lastName) {
      resultado = { [key]: Object.values(resultado)[index] };
    }
  });

  return resultado
};
//  console.log(employeeCoverage('Sharonda'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor })
}

function isManager(id) {
  // seu código aqui
  const arrayManagers = data.employees.map(item => item.managers);
  const managers = arrayManagers.reduce((acumulado, item) => [...acumulado, ...item], []);

  return managers.some(item => item === id);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const idades = data.animals.find(item => item.name === animal).residents.map(item => item.age);

  return idades.every(item => item >= age);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const primeiroIdEspecie = data.employees.find(item => item.id === id).responsibleFor[0];
  const individuos = animalsByIds(primeiroIdEspecie)[0].residents;

  // const animaisEspecie = data.animals.find(item => item.name ===)

  const objetoResultado = individuos.reduce((acumulado, item) =>
    ((item.age > acumulado.age) ? (item) : (acumulado)));

  const { name, sex, age } = objetoResultado;

  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  let { Adult, Senior, Child } = data.prices;

  const aumentaPreco = faixaEtaria =>
  (Math.ceil(((100 + percentage) * faixaEtaria)) / 100).toFixed(2);

  Adult = aumentaPreco(Adult);
  Senior = aumentaPreco(Senior);
  Child = aumentaPreco(Child);

  data.prices = { Adult, Senior, Child }
}
//  console.log(increasePrices(50))

let contador = 0;

class Animal {
  // seu código aqui
  constructor(name, sex, age, species) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species;
    contador += 1;
  }

  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`
  }

  static totalAnimals() {
    return contador;
  }

  // contador() {
  //   contador
  // }
}

function createAnimals() {
  // seu código aqui
  // const novoAnimal = new Animal();
  // data.animals.push(novoAnimal);

  const animaisDeCadaEspecie = data.animals.map(item => item.residents);

  const cadaEspecie = data.animals.map(item =>
    item.name.substr(0, item.name.length - 1));

  const objetos = [];
  for (let i = 0; i < cadaEspecie.length; i += 1) {
    animaisDeCadaEspecie[i].forEach((animal) => {
      animal.species = cadaEspecie[i];
    });

    objetos[i] = animaisDeCadaEspecie[i];
  }

  const objetosEspalhados = objetos.reduce((acumulado, item) => [...acumulado, ...item], []);

  const objetosClasse = objetosEspalhados.map(objeto =>
    new Animal(objeto.name, objeto.sex, objeto.age, objeto.species));

  return objetosClasse;
}
// console.log(createAnimals())
// console.log(createAnimals())

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

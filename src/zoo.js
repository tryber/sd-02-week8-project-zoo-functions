const data = require('./data')

function entryCalculator(entrants = {}) {
  const arranjoEntradas = Object.keys(entrants);
  if (entrants !== {}) {
    let valorAPagar = 0;
    arranjoEntradas.forEach((faixaEtaria) => {
      valorAPagar += entrants[faixaEtaria] * data.prices[faixaEtaria]
    })
    return valorAPagar
  };
  return 0
};

function schedule(dayName) {
  const Objeto = {}
  Object.keys(data.hours).map((dia) => {
    Objeto[dia] = `Open from ${data.hours[dia].open}am until ${data.hours[dia].close - 12}pm`;
    Objeto.Monday = 'CLOSED';
    return Objeto;
  })
  if (!dayName) { return Objeto }
  const retorno = {}
  retorno[dayName] = Objeto[dayName]
  return retorno
}

function animalCount(species) {
  if (species == null) {
    const arranjoAnimais = {};
    data.animals.forEach((especie) => {
      arranjoAnimais[especie.name] = especie.residents.length
    });
    return arranjoAnimais
  }
  return data.animals.find(animal => (animal.name === species)).residents.length;
};

function retornarAnimalNomes(animal, sexo = false, sorted = false) {
  const animaisNomes = data.animals.find(({ name }) => name === animal).residents;
  if (sexo) {
    const arranjoNomes = animaisNomes.filter(({ sex }) => sex === sexo).map(({ name }) => name)
    if (sorted) {
      const resposta = arranjoNomes.sort()
      return { [animal]: resposta }
    }
    return { [animal]: arranjoNomes }
  }
  else {
    const arranjoNomes = animaisNomes.map(({ name }) => name)
    if (sorted) {
      const resposta = arranjoNomes.sort()
      return { [animal]: resposta }
    }
    return { [animal]: arranjoNomes }
  }
}

function resultadoPadrao() {
  let resultado = {}
  const arranjoCardinais = ['NE', 'NW', 'SE', 'SW']
  arranjoCardinais.forEach((direcao) => {
    const especiesFiltradasPorLocalizacao =
      data.animals.filter(({ location }) => location === direcao)
    resultado[direcao] = especiesFiltradasPorLocalizacao.reduce
      ((acc, { name }) => acc.concat(name), [])
  })
  return resultado
}

function escreverONome(sex = false, sorted) {
  return Object.values(resultadoPadrao()).map(arranjoEspecies =>
    arranjoEspecies.reduce((acc, especie) =>
      acc.concat(retornarAnimalNomes(especie, sex, sorted)), []))
}

function animalMap(options) {
  if (!options) {
    return resultadoPadrao()
  }
  const { includeNames, sex = false, sorted = false } = options

  if (includeNames === true) {
    const [NE, NW, SE, SW] = escreverONome(sex, sorted)
    const respostacompleta = { 'NE': NE, 'NW': NW, 'SE': SE, 'SW': SW }
    return respostacompleta
  }

  return resultadoPadrao()
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  const animaisPorId = []
  if (ids.length === 0) {
    return animaisPorId;
  }
  ids.map(idPassado => animaisPorId.push(data.animals.find(animal => idPassado === animal.id)))
  return animaisPorId;
}

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  return data.employees.find(funcionario => funcionario.id === ids)
};

function employeeByName(employeeName) {
  if (!employeeName) { return {} }
  return data.employees.find(empregado => (empregado.firstName === employeeName ||
    empregado.lastName === employeeName))
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  const objFinal = {}
  data.employees.forEach((empregado) => {
    const { firstName, lastName, responsibleFor } = empregado
    objFinal[`${firstName} ${lastName}`] = (animalsByIds(...responsibleFor)).map(animal => animal.name)
  })
  if (!idOrName) {
    return objFinal
  }
  const objEmploy = employeeByName(idOrName) ? employeeByName(idOrName) : employeesByIds(idOrName);
  const chave = `${objEmploy.firstName} ${objEmploy.lastName}`
  const valor = objFinal[chave]
  const resultado = {}
  resultado[chave] = valor
  return resultado
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const empregado = {};
  empregado.id = id;
  empregado.firstName = firstName;
  empregado.lastName = lastName;
  empregado.managers = managers;
  empregado.responsibleFor = responsibleFor;
  data.employees.push(empregado)
}

function isManager(id) {
  const eGerente = data.employees.some(trabalhador =>
    trabalhador.managers.some(gerentes =>
      gerentes === id))
  return eGerente
}

function animalsOlderThan(animal, age) {
  const selecionarAnimais = data.animals.find(elemento => elemento.name === animal)
  return selecionarAnimais.residents.every(idades => idades.age > age)
}

function oldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find(empregado => empregado.id === id).responsibleFor[0];
  const arranjoResidents = data.animals.find(especies => especies.id === idAnimal).residents
  let maiorIdade = 0;
  arranjoResidents.forEach((residente) => {
    maiorIdade = maiorIdade < residente.age ? residente.age : maiorIdade
  })
  const { name, sex, age } = arranjoResidents.find(residente => residente.age === maiorIdade)
  return [name, sex, age]
}

function increasePrices(percentage) {
  const arranjoIdades = Object.keys(data.prices)
  arranjoIdades.forEach((faixaEtaria) => {
    data.prices[faixaEtaria] = parseFloat((Math.ceil(
      (data.prices[faixaEtaria] * (100 + percentage))) / 100).toFixed(2))
  })
}

let numeroDeAnimais = 0

class Animal {
  constructor(name, sex, age, species) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species
  }
  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species.substring(0, (this.species.length - 1))}`
  }
  static totalAnimals() {
    return numeroDeAnimais
  }
}

function createAnimals() {
  const especies = data.animals.map(({ name: especie, residents }) => ({ especie, residents }))
  especies.forEach(({ especie, residents }) => {
    residents.forEach((objeto) => { objeto.especie = especie })
  })
  const criarOAnimal = especies.map(({ residents: [...animais] }) => (animais))
  const arranjoAnimais = []
  criarOAnimal.forEach((porEspecie) => {
    porEspecie.forEach(({ name, sex, age, especie }) => {
      arranjoAnimais.push(new Animal(name, sex, age, especie))
    })
  })
  numeroDeAnimais = arranjoAnimais.length
  return arranjoAnimais
}

function createEmployee(personalInfo, associatedWith) {
  const novoEmployee = { ...personalInfo, ...associatedWith }
  return novoEmployee
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

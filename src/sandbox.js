const data = require('./data')

function oldestFromFirstSpecies(id) {
  const responsible = data.employees.find(employee => employee.id === id).responsibleFor[0]
  const animals = data.animals.find(animal => animal.id === responsible).residents
  const oldest = animals.map(animal => animal.age).reduce((num, cur) => {
     return cur > num ? cur : num
  })
  const {name, sex, age} = animals.find(animal => animal.age === oldest)
  return [name, sex, age]
}

console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))

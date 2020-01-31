const data = require('./data')

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

console.log(animalMap({ includeNames: true }))

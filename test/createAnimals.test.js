const assert = require('assert'),
  zoo = require('../src/zoo'),
  data = require('../src/data');

let actual, expected, options

/*****************/
/* createAnimals */
/*****************/

// retorna um array de objetos da classe Animal. Esta classe contém os atributos
// name, sex, age and species.
const animals = zoo.createAnimals()

assert.equal(animals.length, 31)

animals.forEach(animal => {
  assert.equal(typeof animal, 'object')
  assert.equal(animal.constructor.name, 'Animal')
  assert.equal(typeof animal.name, 'string')
  assert.ok(animal.sex === 'male' || animal.sex === 'female')
  assert.equal(typeof animal.age, 'number')
  assert.equal(typeof animal.species, 'string')
})

/***************/
/* Animal.info */
/***************/

// retorna uma string formatada descrevendo o animal
assert.equal(animals[0].info(), 'Zena is a 12 year old female lion')
assert.equal(animals[30].info(), 'Bernard is a 6 year old male giraffe')

/************************/
/* Animal.totalAnimals */
/************************/

// retorna o número total de animais existentes
assert.equal(zoo.Animal.totalAnimals(), 31)

/******************************************************************************/

const assert = require('assert'),
  zoo = require('../src/zoo'),
  data = require('../src/data');

let actual, expected

/***************/
/* animalCount */
/***************/

// sem parâmetros, returna animais e suas quantidades
actual = zoo.animalCount();
expected = {
  'lions': 4,
  'tigers': 2,
  'bears': 3,
  'penguins': 4,
  'otters': 4,
  'frogs': 2,
  'snakes': 2,
  'elephants': 4,
  'giraffes': 6
};

assert.deepEqual(actual, expected);

// com o nome de uma espécide de animal, retorna somente a quantidade
actual = zoo.animalCount('lions');
expected = 4;

assert.deepEqual(actual, expected);

actual = zoo.animalCount('snakes');
expected = 2;

assert.deepEqual(actual, expected);

/******************************************************************************/

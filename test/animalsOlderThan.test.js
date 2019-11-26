const assert = require('assert'),
  zoo = require('../src/zoo'),
  data = require('../src/data');

let actual, expected, options


/********************/
/* animalsOlderThan */
/********************/

// passados o nome de uma espécie e uma idade, testa se todos os animais desta
// espécie possuem a idade mínima especificada
actual = zoo.animalsOlderThan('otters', 7)
expected = true

assert.deepEqual(actual, expected)

actual = zoo.animalsOlderThan('penguins', 10)
expected = false

assert.deepEqual(actual, expected)

/******************************************************************************/

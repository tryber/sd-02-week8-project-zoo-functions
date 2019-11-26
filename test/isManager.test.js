const assert = require('assert'),
  zoo = require('../src/zoo'),
  data = require('../src/data');

let actual, expected

/*************/
/* isManager */
/*************/

// testa se o id passado é de um gerente
actual = zoo.isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')
expected = false
assert.deepEqual(actual, expected)

actual = zoo.isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83')
expected = true
assert.deepEqual(actual, expected)

/******************************************************************************/

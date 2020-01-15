const assert = require('assert'),
  zoo = require('../src/zoo'),
  data = require('../src/data');

let actual, expected, options

/*************/
/* schedule */
/*************/

// sem parâmetros, retorna um cronograma legível para humanos
actual = zoo.schedule();
expected = {
  'Tuesday': 'Open from 8am until 6pm',
  'Wednesday': 'Open from 8am until 6pm',
  'Thursday': 'Open from 10am until 8pm',
  'Friday': 'Open from 10am until 8pm',
  'Saturday': 'Open from 8am until 10pm',
  'Sunday': 'Open from 8am until 8pm',
  'Monday': 'CLOSED'
};

assert.deepEqual(actual, expected);

// se um único dia for passado, retorna somente este dia em um formato
// legível para humanos
actual = zoo.schedule('Monday');
expected = {
  'Monday': 'CLOSED'
};

assert.deepEqual(actual, expected);

actual = zoo.schedule('Tuesday');
expected = {
  'Tuesday': 'Open from 8am until 6pm'
};

assert.deepEqual(actual, expected);

/******************************************************************************/

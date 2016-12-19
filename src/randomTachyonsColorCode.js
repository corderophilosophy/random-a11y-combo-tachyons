'use strict'
const Colors = require('./colors');
const getRandomProp = require('./helpers').getRandomProp;
module.exports = function() {
  return getRandomProp(Colors);
}

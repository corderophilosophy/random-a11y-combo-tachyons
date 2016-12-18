'use strict'

const Colors = require('./colors');
const {getRandomProp} = require('./helpers');

module.exports = function() {
  return getRandomProp(Colors);
}

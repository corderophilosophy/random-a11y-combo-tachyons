'use strict';
const getContrast = require('get-contrast');
const Colors = require('./src/colors');
const randTachCode = require('./src/randomTachyonsColorCode');
const {getNameFromValue} = require('./src/helpers');
module.exports = function randTach(colorOne) {
  colorOne = colorOne || randTachCode();
  var colorTwo = randTachCode();
  while (!getContrast.isAccessible(colorOne, colorTwo, true)) {
    colorTwo = randTachCode();
  }
  return [getNameFromValue(Colors, colorOne), getNameFromValue(Colors, colorTwo)];
};

'use strict';
const helpers = {
  getRandomProp: function(object) {
    var vals = Object.keys(object);
    return object[vals[Math.floor(Math.random() * vals.length)]];
  },
  getNameFromValue: function(object, value) {
    var name = Object.keys(object).filter(function(el) {
      return object[el] == value;
    })
    return name.toString();
  }
}

module.exports = helpers;

'use strict';
const helpers = {
  getRandomProp: function(object) {
    let vals = Object.keys(object);
    return object[vals[Math.floor(Math.random() * vals.length)]];
  },

  getNameFromValue: function(object, value) {
    let name = Object.keys(object).filter((el) => {
      return object[el] == value;
    })
    return name.toString();
  }
}

module.exports = helpers;

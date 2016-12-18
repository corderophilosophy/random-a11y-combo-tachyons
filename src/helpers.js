'use strict';
const helpers = {
  getRandomProp: function(object) {
    let keys = Object.keys(object);
    return object[keys[Math.floor(Math.random() * keys.length)]];
  },

  getNameFromValue: function(object, value) {
    let name = Object.keys(object).filter((el) => {
      return object[el] == value;
    })
    return name.toString();
  }
}

module.exports = helpers;

const angular = require('angular');

module.exports = hour;

hour.$inject = [];

function hour() {
  return input => {
    if (angular.isNumber(input = +input)) {
      const hours = Math.floor(input / 60);
      const minutes = input % 60;

      return `${hours}h${minutes}`;
    }

    return null;
  }
}
'use strict';

var angular = require('angular');

module.exports = novalidate;

novalidate.$inject = [];

function novalidate() {
    return {
        restrict: 'A',
        priority: -500, //o ng-submit é 0, validar antes
        link: function ($scope, $element, $attrs) {
            $element.on('submit', (event) => {
                var fields = [];

                angular.forEach($element[0], (field) => {
                    if (angular.element(field).hasClass('ng-invalid')) {
                        fields.push(field);
                    }
                });

                angular.forEach(fields.reverse(), (field, i) => {
                    field.focus();
                    if (fields.length - 1 == i) {
                        field.blur();
                        field.focus();
                    }
                });

                if (fields.length) { //Tem algum campo inválido
                    event.preventDefault(); //Não dar o submit do form (evento padrão)
                    event.stopImmediatePropagation(); //Não chamar outros listeners de submit
                    return false;
                }
            });
        }
    }
}
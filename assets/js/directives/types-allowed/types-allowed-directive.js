
'use strict';

module.exports = typeAllowed;

function typeAllowed() {
    return {
        require: 'ngModel',
        restrict: 'A',
        scope: {
            typesTasks: '=',
        },
        link: function ($scope, element, attributes, ngModel) {
            ngModel.$validators.typesAllowed = modelValue => {
                if (!modelValue)
                    return false;

                 return $scope.typesTasks.includes(modelValue.toUpperCase());
            };
        }
    }
}
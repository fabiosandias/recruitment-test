/**
 * Created by ianldgs on 08/07/16.
 */
'use strict';

const angular = require('angular');

export default function Confirm($uibModal, $sce) {
    'ngInject';

    var me = {};

    me.show = function (_message, {options = null, title = 'Confirmação:', cancelText = 'Cancelar', confirmText = 'OK'} = {}) {
        var message = $sce.trustAsHtml(_message);

        return $uibModal.open({
            template: require('./confirm.html'),
            controller: /* @ngInject */ ($scope, $uibModalInstance) => {
                $scope.title = title;
                $scope.message = message;
                $scope.options = options;
                $scope.cancelText = cancelText;
                $scope.confirmText = confirmText;
                $scope.choices = {};

                $scope.confirm = function () {
                    $uibModalInstance.close($scope.choices);
                }
            },
            size: 'md',
            windowClass: 'alert-modal confirm-modal'
        });
    }

    return me;
}

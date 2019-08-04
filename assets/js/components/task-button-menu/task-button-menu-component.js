'use strict';

require('angular')
    .module('recruitmentTest')
    .component('taskButtonMenu', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./task-button-menu.html'),
        controller: class TaskButtonMenu {

            constructor() {
                'ngInject';

            }

            $onInit() {


            }
        }
    });
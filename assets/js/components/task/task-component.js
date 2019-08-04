'use strict';

require('angular')
    .module('recruitmentTest')
    .component('task', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./task.html'),
        controller: class Task {

            constructor() {
                'ngInject';

            }

            $onInit() {


            }
        }
    });
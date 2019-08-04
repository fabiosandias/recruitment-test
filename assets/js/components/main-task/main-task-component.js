'use strict';

require('angular')
    .module('recruitmentTest')
    .component('mainTask', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./main-task.html'),
        controller: class MainTask {

            constructor() {
                'ngInject';

            }

            $onInit() {


            }
        }
    });
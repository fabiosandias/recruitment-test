'use strict';

require('angular')
    .module('recruitmentTest')
    .component('taskContainer', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./task-container.html'),
        controller: class TaskContainer {

            constructor() {
                'ngInject';

            }

            $onInit() {


            }
        }
    });
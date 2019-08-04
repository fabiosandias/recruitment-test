'use strict';

require('angular')
    .module('recruitmentTest')
    .component('task', {
        bindings: {
            tasks: '='
        },
        controllerAs: 'vm',
        template: require('./task.html'),
        controller: class Task {

            constructor(Enums, TaskService) {
                'ngInject';
                this.enums = Enums;
                this.taskService = TaskService;

            }

            deleteById(id) {
                this.taskService.deleteById(id);
            }

        }
    });
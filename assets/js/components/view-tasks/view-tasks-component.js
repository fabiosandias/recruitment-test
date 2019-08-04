'use strict';

require('angular')
    .module('recruitmentTest')
    .component('viewTasks', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./view-tasks.html'),
        controller: class ViewTasks {

            /**
             *
             * @param {TaskService} TaskService
             */
            constructor(TaskService) {
                'ngInject';
                this.taskService = TaskService

            }

            $onInit() {
                this.tasks = this.taskService.getAll();
            }

            deleteAllTask() {
                this.taskService.deleteAll();
                this.tasks = this.taskService.getAll();
            }
        }
    });
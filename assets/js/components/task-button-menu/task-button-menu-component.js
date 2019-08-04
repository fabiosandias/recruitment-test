'use strict';

require('angular')
    .module('recruitmentTest')
    .component('taskButtonMenu', {
        bindings: {
            deleteAllTasks: '&'
        },
        controllerAs: 'vm',
        template: require('./task-button-menu.html'),
        controller: class TaskButtonMenu {

            constructor(TaskService, $scope) {
                'ngInject';
                this.taskService = TaskService;
                this.$scope = $scope;

            }

            deleteAllTasks() {
                this.deleteAllTasks();
                this.$scope.$apply();
            }

            thereAreTasks() {
                return this.taskService.getAll();
            }
        }
    });
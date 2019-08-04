'use strict';

require('angular')
    .module('recruitmentTest')
    .component('taskDetail', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./task-detail.html'),
        controller: class TaskDetail {

            /**
             *
             * @param {TaskService} TaskService
             */
            constructor(TaskService, $stateParams, $state) {
                'ngInject';
                this.taskService = TaskService;
                this.stateParams = $stateParams;
                this.state = $state;

                this.task = this.taskService.getById(this.stateParams.uuid);
            }
        }
    });
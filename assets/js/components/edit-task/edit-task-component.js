'use strict';

require('angular')
    .module('recruitmentTest')
    .component('editTask', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./edit-task.html'),
        controller: class EditTask {

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
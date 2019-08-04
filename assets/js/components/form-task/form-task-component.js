'use strict';

require('angular')
    .module('recruitmentTest')
    .component('formTask', {
        bindings: {
            task: "=",
        },
        controllerAs: 'vm',
        template: require('./form-task.html'),
        controller: class FormTask {

            /**
             *
             * @param {TaskService} TaskService
             * @param {moment} moment
             * @param {$stateParams} $stateParams
             * @param {UuidService} UuidService
             */
            constructor(TaskService, moment, $stateParams, UuidService) {
                'ngInject';
                this.taskService = TaskService;
                this.moment = moment;
                this.stateParams = $stateParams;
                this.uuidService = UuidService;

        
                if (this.stateParams.m) {
                    this.isDetail = this.stateParams.m;
                    this.verifyMethod();
                } else {
                    this.titleForm = "Create new task";
                }



            }

            verifyMethod() {
                if(!this.isDetail) {
                    this.titleForm = "Create new task";
                }

                if(this.isDetail && this.isDetail === 'edit') {
                    this.titleForm = "Edit Task";
                }

                if(this.isDetail && this.isDetail === 'detail') {
                    this.titleForm = "Task Detail";
                }
            }

            enableEditing() {
                this.isDetail = 'edit';
                this.stateParams.m = 'edit';
                this.verifyMethod();
            }

            onSubmit() {
                const task = {
                    uuid: this.uuidService.generateUUID(),
                    type: this.task.type,
                    content: this.task.content,
                    done : this.task.done,
                    date_created: this.moment().format("YYYY/MM/DD HH:mm:ss")
                };

            
                if(this.stateParams.m === 'edit')
                    this.taskService.updateTaskById(this.stateParams.uuid, task);
                 else
                    this.taskService.save(task);

                this.taskService.goToNextStep('task.list', null);
            }



        }
    });
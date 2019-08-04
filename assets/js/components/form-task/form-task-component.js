'use strict';

require('angular')
    .module('recruitmentTest')
    .component('formTask', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./form-task.html'),
        controller: class FormTask {

            constructor() {
                'ngInject';

            }

            $onInit() {


            }
        }
    });
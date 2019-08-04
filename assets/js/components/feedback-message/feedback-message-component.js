'use strict';

require('angular')
    .module('recruitmentTest')
    .component('feedbackMessage', {
        bindings: {
            message: '@'
        },
        controllerAs: 'vm',
        template: require('./feedback-message.html'),
        controller: class FeedbackMessage {

            constructor() {
                'ngInject';

            }

            $onInit() {


            }
        }
    });
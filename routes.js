'use strict';

require('angular')
    .module('recruitmentTest')
    .config(routes);

function routes($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('welcome', {
            url: '/',
            template: `<welcome></welcome>`,
        })
        .state('task', {
            url: '/task',
            template: `<main-task></main-task>`,
        })
        .state('task.create', {
            url: '/create',
            controller: ($scope, $state, $stateParams) => {
                'ngInject';

                $scope.task = { uuid: '', type: '', content: '', done : '', date_created: ''};
            },
            template: `<form-task task="{ uuid: '', type: '', content: '', done : '', date_created: ''}"></form-task>`,
        })
        .state('task.list', {
            url: '/list',
            template: `<view-tasks></view-tasks>`,
        })
        .state('task.edit', {
            url: '/edit/:uuid/method/:m',
            template: `<edit-task></edit-task>`,
        });


    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

}

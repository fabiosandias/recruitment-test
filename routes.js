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
            template: `<form-task></form-task>`,
        })
        .state('task.list', {
            url: '/list',
            template: `<task></task>`,
        });


    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

}

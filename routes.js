'use strict';

require('angular')
    .module('recruitmentTest')
    .config(routes);

function routes($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('feed', {
            url: '/',
            template: `<main-task></main-task>`,
        });


    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

}

'use strict';

require('angular')
    .module('recruitmentTest')
    .component('header', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./header.html'),
        controller: class Header {

            constructor() {
                'ngInject';

            }

            $onInit() {


            }
        }
    });
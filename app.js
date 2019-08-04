'use strict';

require('babel-polyfill');

window.jQuery = require('jquery');

const angular = require('angular');

require('angularjs-slider/dist/rzslider.css');

angular.module('recruitmentTest', [
    require('ngstorage').name,
    require('angular-cookies'),
    require('angular-ui-bootstrap/src/accordion'),
    require('angular-ui-bootstrap/src/buttons'),
    require('angular-ui-bootstrap/src/collapse'),
    require('angular-ui-bootstrap/src/dropdown'),
    require('angular-ui-bootstrap/src/popover'),
    require('angular-ui-bootstrap/src/modal'),
    require('angular-ui-bootstrap/src/popover'),
    require('angular-ui-bootstrap/src/tooltip'),
    require('angular-ui-bootstrap/src/typeahead'),
    require('@uirouter/angularjs').default,
    require('angular-animate'),
    require('angular-sanitize'),
    require('angular-messages'),
]);

angular.module('recruitmentTest').constant('moment', require('moment-timezone'));

require('./assets/js/components');
require('./assets/js/directives');
require('./assets/js/filters');
require('./config');
require('./routes');
require('./assets/js/services');

require('angular-i18n/angular-locale_pt-br');
'use strict';

require('angular')
    .module('recruitmentTest')
    .filter('hour', require('./hour'))
    .filter('BRL', require('./BRL'));

'use strict';

import { StickyStatesPlugin } from "@uirouter/sticky-states";

const dev = document.location.hostname.match(/^127.0.0.1:8080/);

require('angular')
    .module('recruitmentTest')
    .config(config)
    .run(run);

/* @ngInject */
function config($logProvider, $compileProvider, $httpProvider, $locationProvider, $animateProvider, $qProvider, $uiRouterProvider) {

    /*
     * Inserido para resolver problema de ui router - transition superseded
     */
    $qProvider.errorOnUnhandledRejections(false);
    
    /*
     * O Content-Type que o angular usa por padrão é outro,
     * os parâmetros do ajax acabam indo pelo request payload (o php tem que acessar pelo php://input)
     * Então temos que sobrescrever pelo padrão normal, para continuarmos usando do $_REQUEST
     */
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded';

    /*
     * Avisar o back-end que o request foi através de ajax
     */
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"; //TODO: verificar se isso resolve pra todos os métodos

    /*
     * Desabilitar o ng-animate em algum elemento, apenas colocando class="ng-animate-disabled"
     */
    $animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);

    $locationProvider
        .html5Mode({
            enabled: false,
            requireBase: false,
            rewriteLinks: false
        });
    $uiRouterProvider.plugin(StickyStatesPlugin);
}

/* @ngInject */
function run($http, $httpParamSerializerJQLike) {

}
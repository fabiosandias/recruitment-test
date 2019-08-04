/**
 * Created by ianldgs on 18/05/16.
 *
 * No card de voos evita setar o voo selecionado várias vezes.
 */
'use strict';

module.exports = stopClickPropagation;

stopClickPropagation.$inject = [];

function stopClickPropagation() {
    return {
        restrict: 'A',
        priority: -1, //antes do ngClick
        link: function(scope, element) {
            element.click(e => e.stopPropagation());
        }
    };
}
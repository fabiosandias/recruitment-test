'use strict';

let angular = require('angular');

module.exports = Enums;


function Enums() {
    return {
        PREFIX_CODE_SHARE_COMPANIES: {
            GOL: ['G3'],
            TAM: ['JJ', 'LA']
        },
        CODE_SHARE_COMPANIES: [
            'TAM',
            'GOL'
        ],
        AIRLINES: {
            NAMES: {
                GOL: 'GOL',
                AZUL: 'AZUL',
                TAM: 'TAM',
                AVIANCA: 'AVIANCA'
            },
            CODES: {
                GOL: 'GOL',
                AZUL: 'AZU',
                TAM: 'TAM',
                AVIANCA: 'AVI'
            }
        },
        COMPANIES_PREFIX: {
            PASSAREDO: '2Z',
        }
    };
}


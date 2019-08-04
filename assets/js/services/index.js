'use strict';
import CheckoutService from './CheckoutService';
import Confirm from './Confirm';
import Enums from './Enums';

require('angular')
    .module('recruitmentTest')
    .service('CheckoutService', CheckoutService)
    .service('Confirm', Confirm)
    .service('Enums', Enums);




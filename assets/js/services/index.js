'use strict';
import Confirm from './Confirm';
import Enums from './Enums';
import TaskService from './TaskService';
import UuidService from './UuidService';

require('angular')
    .module('recruitmentTest')
    .service('Confirm', Confirm)
    .service('Enums', Enums)
    .service('TaskService', TaskService)
    .service('UuidService', UuidService);




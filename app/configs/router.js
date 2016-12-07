/**
 * Created by shijianfang on 16/12/6.
 */

"use strict";
// middle
var ApiHandle = require('../middles/api');

// router
var Index = require('../routers/index');
var Api = require('../routers/api');

module.exports = function(app){
    // middle api
    ApiHandle(app);

    // index page
    Index(app);

    // API
    Api(app);
};

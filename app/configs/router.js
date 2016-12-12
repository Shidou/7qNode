/**
 * Created by shijianfang on 16/12/6.
 */

"use strict";
// middle
var ApiHandle = require('../middles/api');
var renderHandle = require('../middles/render');

// router
var Index = require('../routers/index');
var Api = require('../routers/api');

module.exports = function(app){

    // middle api
    ApiHandle(app);

    // API
    Api(app);


    // index page
    Index(app);

    // render
    renderHandle(app);
};

/**
 * Created by shijianfang on 16/12/6.
 */

"use strict";
var path = require('path');

// view engine setup
module.exports = function(app){
    app.set('views', path.join(path.resolve(__dirname, '..'), qNode.env +'/views'));
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');
};

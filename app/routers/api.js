/**
 * Created by shijianfang on 16/12/7.
 */
"use strict";

var request = require('request');

module.exports = function(app){


    // index page
    app.get('/api/test', function(req, res){
        res.success('test', 'messge');
    });

    app.get('/api/fail', function(req, res){
        var err = new Error();
        err.message = '自定义错误';
        res.fail(err);
    });

    // 自定义
    qNode.tools.api(app, request);
};
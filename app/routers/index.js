/**
 * Created by shijianfang on 16/12/7.
 */

"use strict";

module.exports = function(app){
    // index page
    app.get('/', function(req, res){
        res.render('index', { title: 'Express' });
    });
};
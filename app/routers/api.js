/**
 * Created by shijianfang on 16/12/7.
 */
"use strict";

module.exports = function(app){
    //

    // index page
    app.get('/api/test', function(req, res){
        res.success('test', 'messge');
    });
};
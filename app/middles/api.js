/**
 * Created by shijianfang on 16/12/7.
 */
"use strict";

module.exports = function(app){
    app.use(function(req, res, next){

        // bind success json
        res.success = function(data, message) {
            res.json({
                status: 200,
                message: message || '请求成功',
                data: data
            });
        };

        //bind fail json
        res.fail = function(err, errcode) {
            res.json({
                status: err.status || 500,
                message: err.message || err.Error || err.error_code || errcode || 'UNKOWN'
            });
        };
        next();
    });

};
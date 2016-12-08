/**
 * Created by shijianfang on 16/12/7.
 */
"use strict";

global.qNode.tools = {};

// 处理API公共类方法
global.qNode.tools.api = function(app, request){
    app.get(/^\/api\/.*$/i, function(req, res, next){
        var urlPath = qNode.configs.serverUrl + req.originalUrl.replace(qNode.configs.rule.local,  qNode.configs.rule.after);
        request(urlPath, function (error, response, body) {
            console.info(body);
            if(typeof body == 'string'){
                try {
                    body = JSON.parse(body);
                }catch(err) {
                    //在此处理错误
                    console.info(err);
                }
            }
            // response.headers['content-type'].indexOf('application/json') == -1
            if(typeof body == 'string'){
                var err = new Error();
                err.message = '这不是一个json接口';
                return res.fail(err);
            }
            if (!error && response.statusCode == 200) {
                if(typeof body == 'string'){
                    body = JSON.parse(body);
                }
                res.success(body.data || body);
            }else {
                next(error);
            }
        });
    });
};
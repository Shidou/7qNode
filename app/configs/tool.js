/**
 * Created by shijianfang on 16/12/7.
 */
"use strict";

var secrets = require('./secret');
var crypto = require('crypto');
var _ = require('lodash')

global.qNode.tools = {};

/**
 * 处理API公共类方法
 * @param app
 * @param req
 */
global.qNode.tools.api = function(app, request){
    app.get(/^\/api\/.*$/i, function(req, res, next){
        console.info(req.headers);
        var urlPath = qNode.configs.serverUrl + req.originalUrl.replace(qNode.configs.rule.local,  qNode.configs.rule.after);
        request({
            url: urlPath,
            //headers: _.omit(req.headers, ['cookie', 'refer']),
        }, function (error, response, body) {
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


/**
 * aes加密
 * @param data
 * @param secretKey
 */
global.qNode.tools.aesEncrypt = function(data, secretKey) {
    var secret = secretKey || secrets.secretKey;
    var cipher = crypto.createCipher('aes-128-ecb',secret);
    return cipher.update(data,'utf8','hex') + cipher.final('hex');
};

/**
 * aes解密
 * @param data
 * @param secretKey
 * @returns {*}
 */
global.qNode.tools.aesDecrypt = function(data, secretKey) {
    var secret = secretKey || secrets.secretKey;
    var cipher = crypto.createDecipher('aes-128-ecb',secret);
    return cipher.update(data,'hex','utf8') + cipher.final('utf8');
};
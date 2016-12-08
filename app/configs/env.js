/**
 * Created by shijianfang on 16/12/6.
 */

"use strict";

var path = require('path');

global.qNode = {};
global.qNode.env = (process.argv[2] === "production") ? 'prd' : 'dev';
require('./tool');

// 如果没有指定则默认为生产环境
var env = process.argv[2] || 'production';
env = env.toLowerCase();

// 载入配置文件
var file = path.resolve(__dirname, env);
try {
    var config = module.exports = require(file);
    global.qNode.configs = config;
    console.log('Load config: [%s] %s', env, file);
} catch (err) {
    console.error('Cannot load config: [%s] %s', env, file);
    throw err;
}
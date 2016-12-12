/**
 * Created by shijianfang on 16/12/12.
 */

"use strict";

var fs= require('fs');
var path= require('path');

module.exports = function(app){
    app.get(/^\/.*$/i, function(req, res, next){
        var dirName = req.originalUrl.substr(1) + '.html';
        fs.exists(path.join(path.resolve(__dirname, '..'), qNode.env +'/views/' + dirName), function(exists) {
            console.log(exists);
            exists ? res.render(dirName) : next();
        });
    });

};
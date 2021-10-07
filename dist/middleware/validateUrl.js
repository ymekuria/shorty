"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, res, next) {
    //
    var requestUrl = (req.path === '/shorturl' ? req.body.longUrl : req.params.shortUrl).requestUrl;
});

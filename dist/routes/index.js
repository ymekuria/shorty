"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shortenUrl_1 = __importDefault(require("../controllers/shortenUrl"));
var urlRedirect_1 = __importDefault(require("../controllers/urlRedirect"));
module.exports = function (app) {
    app.get('/:url', urlRedirect_1.default);
    app.post('/shorturl', shortenUrl_1.default);
};

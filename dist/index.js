"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
// creating a single instance of the prisma client to use in the api routes
exports.prisma = new client_1.PrismaClient({ log: ['query', 'info'] });
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(cors_1.default());
require('./routes/index.js')(app);
if (process.env.NODE_ENV === 'production') {
    // serves up production assets
    // main.js or main.css file
    app.use(express_1.default.static('client/build'));
    // serve ups the index.hml
    // file if it doesn't understand the route ie react router
    var path_1 = require('path');
    app.get('*', function (req, res) {
        res.sendFile(path_1.resolve('client', 'build', 'index.html'));
    });
}
var PORT = process.env.PORT || '8090';
var SERVER_URL = process.env.SERVER_URL || 'http://localhost:';
app.listen(PORT, function () { return console.log("server ready at " + SERVER_URL + PORT); });

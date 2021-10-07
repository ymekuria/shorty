"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var core_1 = require("@material-ui/core");
var useTheme_1 = __importDefault(require("../hooks/useTheme"));
var LandingPage_1 = __importDefault(require("./LandingPage"));
function App() {
    var theme = useTheme_1.default();
    return (jsx_runtime_1.jsx(core_1.ThemeProvider, __assign({ theme: theme }, { children: jsx_runtime_1.jsx(LandingPage_1.default, {}, void 0) }), void 0));
}
exports.default = App;

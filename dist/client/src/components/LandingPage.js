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
var UrlForm_1 = __importDefault(require("./UrlForm"));
function LandingPage() {
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(core_1.AppBar, __assign({ position: "static" }, { children: jsx_runtime_1.jsx(HeaderTypography, __assign({ variant: "h5", color: "inherit" }, { children: "Shorty" }), void 0) }), void 0),
            jsx_runtime_1.jsx(CardContainer, { children: jsx_runtime_1.jsx(FormCard, __assign({ raised: true }, { children: jsx_runtime_1.jsx(core_1.Container, { children: jsx_runtime_1.jsx(UrlForm_1.default, {}, void 0) }, void 0) }), void 0) }, void 0)] }, void 0));
}
var CardContainer = core_1.styled(core_1.Container)({
    marginTop: '2em',
    display: 'flex',
    justifyContent: 'center'
});
var FormCard = core_1.styled(core_1.Card)({
    padding: '40px',
    margin: '100px',
    width: '50em',
    height: '4.5em',
    backgroundColor: '#3e54a3',
    color: '#FFFFFF',
    borderRadius: '.5em'
});
var HeaderTypography = core_1.styled(core_1.Typography)({
    padding: '.7em'
});
exports.default = LandingPage;

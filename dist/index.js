"use strict";
exports.__esModule = true;
exports.error = exports.warn = exports.info = exports.log = void 0;
var colors_1 = require("./colors");
function log(text) {
    console.log("LOG >> " + text);
}
exports.log = log;
;
function info(text) {
    console.log("INFO >> " + colors_1["default"].fgGreen + text + colors_1["default"].reset);
}
exports.info = info;
;
function warn(text) {
    console.log("WARN >> " + colors_1["default"].fgYellow + text + colors_1["default"].reset);
}
exports.warn = warn;
;
function error(text) {
    console.log("ERROR >> " + colors_1["default"].fgRed + text + colors_1["default"].reset);
}
exports.error = error;
;

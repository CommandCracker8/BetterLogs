"use strict";
exports.__esModule = true;
exports.error = exports.warn = exports.info = exports.log = exports.linkConsole = void 0;
var colors_1 = require("./colors");
function linkConsole(defaultConsole) {
    var newConsole = defaultConsole;
    newConsole["default"] = {
        log: defaultConsole.log,
        info: defaultConsole.info,
        warn: defaultConsole.warn,
        error: defaultConsole.error
    };
    newConsole.log = log;
    newConsole.info = info;
    newConsole.warn = warn;
    newConsole.error = error;
    return newConsole;
}
exports.linkConsole = linkConsole;
function log(text) {
    console["default"].log("LOG >> " + colors_1["default"].fgWhite + text + colors_1["default"].reset);
}
exports.log = log;
;
function info(text) {
    console["default"].log("INFO >> " + colors_1["default"].fgGreen + text + colors_1["default"].reset);
}
exports.info = info;
;
function warn(text) {
    console["default"].log("WARN >> " + colors_1["default"].fgYellow + text + colors_1["default"].reset);
}
exports.warn = warn;
;
function error(text) {
    console["default"].log("ERROR >> " + colors_1["default"].fgRed + text + colors_1["default"].reset);
}
exports.error = error;
;

import colors from './colors'

export function log(text : string) {
    console.log("LOG >> " + text);
};

export function info(text : string) {
    console.log("INFO >> " + colors.fgGreen + text + colors.reset);
};

export function warn(text : string) {
    console.log("WARN >> " + colors.fgYellow + text + colors.reset);
};

export function error(text : string) {
    console.log("ERROR >> " + colors.fgRed + text + colors.reset);
};
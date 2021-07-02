import colors from './colors'

declare global {
    interface Console {
        default: any
    }
}

export function linkConsole(defaultConsole: Console) {
    var newConsole = defaultConsole
    
    newConsole.default = {
        log: defaultConsole.log,
        info: defaultConsole.info,
        warn: defaultConsole.warn,
        error: defaultConsole.error
    }
    newConsole.log = log
    newConsole.info = info
    newConsole.warn = warn
    newConsole.error = error

    return newConsole
}

export function log(text : string) {
    console.default.log("LOG >> " + colors.fgWhite + text + colors.reset);
};

export function info(text : string) {
    console.default.log("INFO >> " + colors.fgGreen + text + colors.reset);
};

export function warn(text : string) {
    console.default.log("WARN >> " + colors.fgYellow + text + colors.reset);
};

export function error(text : string) {
    console.default.log("ERROR >> " + colors.fgRed + text + colors.reset);
};
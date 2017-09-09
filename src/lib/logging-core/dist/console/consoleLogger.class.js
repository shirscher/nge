"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_core_1 = require("@nge/ioc-core");
const logLevel_enum_1 = require("../logLevel.enum");
/**
 * A logger implementation that writes to the console.
 */
let ConsoleLogger = class ConsoleLogger {
    constructor(name, minLevel = logLevel_enum_1.LogLevel.Info) {
        this.name = name;
        this.minLevel = minLevel;
    }
    log(level, message, ...params) {
        if (!this.isEnabled(level)) {
            return;
        }
        if (level === logLevel_enum_1.LogLevel.Error || level === logLevel_enum_1.LogLevel.Fatal) {
            if (params && params.length > 0) {
                // tslint:disable-next-line:no-console
                console.error(message, this.name, level.name, ...params);
            }
            else {
                // tslint:disable-next-line:no-console
                console.error(message, this.name, level.name);
            }
        }
        else if (level === logLevel_enum_1.LogLevel.Warning) {
            if (params && params.length > 0) {
                // tslint:disable-next-line:no-console
                console.warn(message, this.name, level.name, ...params);
            }
            else {
                // tslint:disable-next-line:no-console
                console.warn(message, this.name, level.name);
            }
        }
        else {
            if (params && params.length > 0) {
                // tslint:disable-next-line:no-console
                console.log(message, this.name, level.name, ...params);
            }
            else {
                // tslint:disable-next-line:no-console
                console.log(message, this.name, level.name);
            }
        }
    }
    isEnabled(logLevel) {
        return logLevel.level >= this.minLevel.level;
    }
    trace(message, params) {
        this.log(logLevel_enum_1.LogLevel.Trace, message, params);
    }
    debug(message, params) {
        this.log(logLevel_enum_1.LogLevel.Debug, message, params);
    }
    info(message, params) {
        this.log(logLevel_enum_1.LogLevel.Info, message, params);
    }
    warn(message, params) {
        this.log(logLevel_enum_1.LogLevel.Warning, message, params);
    }
    error(message, params) {
        this.log(logLevel_enum_1.LogLevel.Error, message, params);
    }
    fatal(message, params) {
        this.log(logLevel_enum_1.LogLevel.Fatal, message, params);
    }
};
ConsoleLogger = __decorate([
    ioc_core_1.Injectable(),
    __metadata("design:paramtypes", [String, logLevel_enum_1.LogLevel])
], ConsoleLogger);
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=consoleLogger.class.js.map
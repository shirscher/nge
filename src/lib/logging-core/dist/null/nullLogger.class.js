"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A logger implementation that writes entries to /dev/null.
 */
class NullLogger {
    log() {
        // NOOP
    }
    isEnabled() {
        return false;
    }
    trace() {
        // NOOP
    }
    debug() {
        // NOOP
    }
    info() {
        // NOOP
    }
    warn() {
        // NOOP
    }
    error() {
        // NOOP
    }
    fatal() {
        // NOOP
    }
}
exports.NullLogger = NullLogger;
//# sourceMappingURL=nullLogger.class.js.map
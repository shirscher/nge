export declare class LogLevel {
    readonly name: string;
    readonly level: number;
    /**
     * Designates finer-grained informational events than the DEBUG.
     */
    static readonly Trace: LogLevel;
    /**
     * Designates fine-grained informational events that are most useful to debug an application.
     */
    static readonly Debug: LogLevel;
    /**
     * Designates informational messages that highlight the progress of the application at coarse-grained level.
     */
    static readonly Info: LogLevel;
    /**
     * Designates potentially harmful situations.
     */
    static readonly Warning: LogLevel;
    /**
     * Designates error events that might still allow the application to continue running.
     */
    static readonly Error: LogLevel;
    /**
     * Designates very severe error events that will presumably lead the application to abort.
     */
    static readonly Fatal: LogLevel;
    constructor(name: string, level: number);
    toString(): string;
}

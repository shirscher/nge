export class LogLevel {
    /**
     * Designates finer-grained informational events than the DEBUG.
     */
    public static readonly Trace: LogLevel = new LogLevel('Trace', 0);
    /**
     * Designates fine-grained informational events that are most useful to debug an application.
     */
    public static readonly Debug: LogLevel = new LogLevel('Debug', 1);
    /**
     * Designates informational messages that highlight the progress of the application at coarse-grained level.
     */
    // tslint:disable-next-line:no-magic-numbers
    public static readonly Info: LogLevel = new LogLevel('Info', 2);
    /**
     * Designates potentially harmful situations.
     */
    // tslint:disable-next-line:no-magic-numbers
    public static readonly Warning: LogLevel = new LogLevel('Warning', 3);
    /**
     * Designates error events that might still allow the application to continue running.
     */
    // tslint:disable-next-line:no-magic-numbers
    public static readonly Error: LogLevel = new LogLevel('Error', 4);
    /**
     * Designates very severe error events that will presumably lead the application to abort.
     */
    // tslint:disable-next-line:no-magic-numbers
    public static readonly Fatal = new LogLevel('Fatal', 5);

    constructor(public readonly name: string, public readonly level: number) {
    }

    public toString() {
        return this.name;
    }
}

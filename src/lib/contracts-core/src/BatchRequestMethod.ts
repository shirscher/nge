export enum BatchRequestMethod {
    /**
     * All requests are executed and errors are returned for any that fail.
     */
    ExecuteAll = 'executeall',
    /**
     * The requests are executed one at a time in order and if any one fails the remaining requests are not executed.
     */
    ShortCircuit = 'shortcircuit',
    /**
     * All requests are performed in a single atomic transaction and all are rolled back if any one fails.
     */
    Atomic = 'atomic',
}

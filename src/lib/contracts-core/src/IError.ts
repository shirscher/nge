export interface IError {
    /**
     * A unique code that identifies they type of the error that occurred.
     */
    code: string;

    /**
     * A friendly message that can be displayed to the end user.
     */
    message: string;

    /**
     * Additional information about the error that can be used for troubleshooting.
     */
    details?: any;

    /**
     * The fields that were in error if the error can be tied back to specific field values.
     */
    fields?: string[];

    /**
     * Contains the exception that caused the error.
     */
    exception?: Error;

    /**
     * If the error is a logged error contains a correlation ID that can be used to search error logs.
     */
    correlationId?: string;
}

import { ValidationResultSeverity } from './validationResultSeverity.enum';

export interface IError {
    code: string;
    message: string;
    fields: string[];
    exception?: ExceptionInformation
}

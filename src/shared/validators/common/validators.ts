import { IError } from '../../contracts/common/error.interface';
import { ErrorCodes } from '../../contracts/common/errorCodes.const';

export interface ValidatorFunc<T> {
    (value: T, field: string): IError[]
}

export const required = (): ValidatorFunc<any> => {
    return (value: any, field: string): IError[] => {
        if (value === undefined || value === null || value === '') {
            return [{
                code: ErrorCodes.required,
                fields: [field],
                message: `${field} is required`
            }];
        }

        return [];
    }
}

/*
export const Validators = {
    required: (value: any): IError[] => {
    }
*/

//min
//max
//minLength
//maxLength
//minDate
//maxDate
//email

/*
 Ng

 fb.group({
    myField: ['', [
        Validators.required,
        toNgValidator(Validators.required)
    ]]
 })

 API

 Commands/Queries
 
 export class MyCommandHandler<MyCommand> {
    validate: (command: MyCommand): IError[] => {
        let errors: IError[] = [];

        errors.concat(Validators.required(command.email));

        return errors;
    }
 }

 Entities
*/
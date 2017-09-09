import { IValidationResult } from './validationResult.interface';

export interface IPageableResponse {
    limit: number;
    offset: number;
    pages: number;
    count?: number;

    next?: IResource;
    prev?: IResource;
}


export interface IResource {
    href: string;   
}


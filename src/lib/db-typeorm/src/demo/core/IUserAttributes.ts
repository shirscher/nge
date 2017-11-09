import { IEntity } from '../../core/IEntity';

export interface User extends IEntity<number> {
    userName: string;

    email: string;

    getId(): number;
}

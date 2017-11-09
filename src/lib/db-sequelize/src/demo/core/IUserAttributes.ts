import { IEntity } from '../../core/IEntity';

export interface IUserAttributes extends IEntity<number> {
    userName: string;

    email: string;

    getId(): number;
}

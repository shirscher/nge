import { IRepository } from '../../core/IRepository';
import { User } from './IUserAttributes';

export interface IUserRepository extends IRepository<User, number> {

}

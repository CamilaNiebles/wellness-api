import { IGenericRepository } from '@abstractions/transactions.abstraction';
import { User } from '@structures/users.structure';

export abstract class DataServices {
  abstract users: IGenericRepository<User>;
}

import { ReadInterface } from './read.abstraction';
import { WriteInterface } from './write.abstraction';
import { DeepPartial, Repository } from 'typeorm';

export abstract class BaseRepository<T>
  implements WriteInterface<T>, ReadInterface<T>
{
  protected abstract readonly repository: Repository<T>;

  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  create(item: DeepPartial<T>) {
    return this.repository.save(item);
  }
}

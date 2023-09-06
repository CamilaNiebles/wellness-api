import { ReadInterface } from './read.abstraction';
import { WriteInterface } from './write.abstraction';

export class BaseRepository<T> implements WriteInterface<T>, ReadInterface<T> {
  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  create(item: T) {
    throw new Error('Method not implemented.');
  }
}

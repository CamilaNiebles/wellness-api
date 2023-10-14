import { BaseRepository } from '@abstractions/base.repository';
import { User } from '@entities/users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectRepository(User) protected readonly repository: Repository<User>,
  ) {
    super();
  }
}

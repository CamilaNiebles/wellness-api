import { BaseRepository } from '@abstractions/base.repository';
import { User } from '@entities/users.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends BaseRepository<User> {}

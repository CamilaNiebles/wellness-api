import { CreateUserDto } from '@dtos/user/create.dto';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '@repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: CreateUserDto) {
    return this.userRepository.create(user);
  }
}

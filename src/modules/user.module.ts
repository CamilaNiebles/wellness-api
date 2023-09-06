import { Module } from '@nestjs/common';
import { UserRepository } from '@src/models/repositories/user.repository';

@Module({
  providers: [UserRepository],
})
export class UserModule {}

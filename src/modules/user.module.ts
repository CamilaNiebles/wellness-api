import { UserController } from '@controllers/user.controller';
import { User } from '@entities/users.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '@services/user.service';
import { UserRepository } from '@src/models/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository, UserService],
  controllers: [UserController],
})
export class UserModule {}

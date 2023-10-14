import { CreateUserDto } from '@dtos/user/create.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '@services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}

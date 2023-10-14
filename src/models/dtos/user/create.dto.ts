import { IsDate, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  profession: string;

  @IsDate()
  birthday: Date;

  @IsDate()
  startDay: Date;
}

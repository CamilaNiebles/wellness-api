import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from '@config/config.module.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@modules/user.module';
import { typeOrmConfig } from './config/typeOrm.config';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

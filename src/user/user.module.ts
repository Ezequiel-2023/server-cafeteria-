import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { EncryptService } from 'src/encrypt/encrypt.service';

@Module({

  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserService, EncryptService],
  controllers: [UserController],
  exports:[UserService, EncryptService],
})
export class UserModule {}

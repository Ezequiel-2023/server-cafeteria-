import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { Orden } from './orden';
import { OrdenController } from './orden.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Orden]),
    UserModule
  ],
    providers: [OrdenService],
    controllers: [OrdenController],
    exports: [OrdenService]
})
export class OrdenModule {}

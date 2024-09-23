import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { Orden } from './orden';
import { OrdenController } from './orden.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Orden])
  ],
    providers: [OrdenService],
    controllers: [OrdenController],
    exports: [OrdenService]
})
export class OrdenModule {}

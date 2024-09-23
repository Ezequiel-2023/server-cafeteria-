import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { Ventas } from './ventas';
import { VentasController } from './ventas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ventas])
  ],
    providers: [VentasService],
    controllers: [VentasController],
    exports: [VentasService]
})
export class VentasModule {}

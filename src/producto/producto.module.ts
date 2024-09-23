import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto])
  ],
    providers: [ProductoService],
    controllers: [ProductoController],
    exports: [ProductoService]
})
export class ProductoModule {}

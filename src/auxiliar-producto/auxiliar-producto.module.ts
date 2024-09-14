import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuxiliarProductoController } from './auxiliar-producto.controller';
import { AuxiliarProductoService } from './auxiliar-producto.service';
import {AuxiliarProducto} from './auxiliar-producto'

@Module({
    imports: [
        TypeOrmModule.forFeature([AuxiliarProducto])
    ],
    providers:[AuxiliarProductoService],
    controllers: [AuxiliarProductoController],
    exports: [AuxiliarProductoService]
})
export class AuxiliarProductoModule {}

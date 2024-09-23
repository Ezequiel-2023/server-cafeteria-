import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria';
import { CategoriaController } from './categoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Categoria])
  ],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [CategoriaService]
})
export class CategoriaModule {}

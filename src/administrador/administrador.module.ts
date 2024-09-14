import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrador } from './administrador';
import { AdministradorController } from './administrador.controller';
import { EncryptModule } from 'src/encrypt/encrypt.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Administrador]),
    EncryptModule,
  ],
  providers: [AdministradorService],
  controllers: [AdministradorController],
  exports:[AdministradorService]
})
export class AdministradorModule {}

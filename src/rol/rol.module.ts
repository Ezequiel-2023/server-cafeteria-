//rol module
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolService } from './rol.service';
import { Rol } from './rol';


@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  providers: [RolService],
  exports: [TypeOrmModule, RolService], // Exporta si necesitas usar el RolRepository en otros módulos
})
export class RoleModule {}


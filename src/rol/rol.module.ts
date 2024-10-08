//rol module
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolService } from './rol.service';
import { Rol } from './rol';
import { RolController } from './rol.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  providers: [RolService],
  exports: [TypeOrmModule, RolService],
  controllers: [RolController], // Exporta si necesitas usar el RolRepository en otros módulos
})
export class RoleModule {}


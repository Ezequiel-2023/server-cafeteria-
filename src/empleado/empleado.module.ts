import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';

@Module({
  providers: [EmpleadoService]
})
export class EmpleadoModule {}

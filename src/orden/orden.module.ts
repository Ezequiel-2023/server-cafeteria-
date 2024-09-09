import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';

@Module({
  providers: [OrdenService]
})
export class OrdenModule {}

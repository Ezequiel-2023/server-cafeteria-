import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaController } from './categoria/categoria.controller';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoController } from './producto/producto.controller';
import { ProductoModule } from './producto/producto.module';
import { EstudianteController } from './estudiante/estudiante.controller';
import { EstudianteModule } from './estudiante/estudiante.module';
import { OrdenController } from './orden/orden.controller';
import { OrdenModule } from './orden/orden.module';
import { VentasController } from './ventas/ventas.controller';
import { VentasModule } from './ventas/ventas.module';
import { EmpleadoController } from './empleado/empleado.controller';
import { EmpleadoModule } from './empleado/empleado.module';
import { AdministradorController } from './administrador/administrador.controller';
import { AdministradorModule } from './administrador/administrador.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuxiliarProductoController } from './auxiliar-producto/auxiliar-producto.controller';
import { AuxiliarProductoModule } from './auxiliar-producto/auxiliar-producto.module';
import { AuxiliarProducto } from './auxiliar-producto/auxiliar-producto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ardi_192*',
      database: 'DB_cafeteria_app',
      entities: [AuxiliarProducto],
      synchronize: true,
    }),
    CategoriaModule, 
    ProductoModule, 
    EstudianteModule, 
    OrdenModule, 
    VentasModule, 
    EmpleadoModule, 
    AdministradorModule,
    AuxiliarProductoModule
    
  ],
  controllers: [
    AppController, 
    CategoriaController, 
    ProductoController,  
    EstudianteController, 
    OrdenController, 
    VentasController, 
    EmpleadoController, 
    AdministradorController,
    AuxiliarProductoController
  ],
  providers: [
   AppService,            
  ],
})
export class AppModule {}

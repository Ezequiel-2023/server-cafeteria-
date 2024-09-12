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
import { Administrador } from './administrador/administrador';
import { Categoria } from './categoria/categoria';
import { Empleado } from './empleado/empleado';
import { Estudiante } from './estudiante/estudiante';
import { Orden } from './orden/orden';
import { Producto } from './producto/producto';
import { Ventas } from './ventas/ventas';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ardi_192*',
      database: 'DB_cafeteria_app',
      entities: [
        Administrador,
        AuxiliarProducto,
        Categoria,
        Empleado,
        Estudiante,
        Orden,
        Producto,
        Ventas
      ],
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

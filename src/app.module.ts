import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoModule } from './producto/producto.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { OrdenModule } from './orden/orden.module';
import { VentasModule } from './ventas/ventas.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { AdministradorModule } from './administrador/administrador.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuxiliarProductoModule } from './auxiliar-producto/auxiliar-producto.module';
import { AuxiliarProducto } from './auxiliar-producto/auxiliar-producto';
import { Administrador } from './administrador/administrador';
import { Categoria } from './categoria/categoria';
import { Empleado } from './empleado/empleado';
import { Estudiante } from './estudiante/estudiante';
import { Orden } from './orden/orden';
import { Producto } from './producto/producto';
import { Ventas } from './ventas/ventas';
import { EncryptModule } from './encrypt/encrypt.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ardi_192*',
      database: 'db_cafeteria_app',
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
    AuxiliarProductoModule,
    EncryptModule
    
  ],
  controllers: [
    AppController, 
  ],
  providers: [
   AppService,     
  ],
})
export class AppModule {}

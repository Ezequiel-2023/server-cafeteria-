import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoModule } from './producto/producto.module';
import { OrdenModule } from './orden/orden.module';
import { VentasModule } from './ventas/ventas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuxiliarProductoModule } from './auxiliar-producto/auxiliar-producto.module';
import { AuxiliarProducto } from './auxiliar-producto/auxiliar-producto';
import { Categoria } from './categoria/categoria';
import { Orden } from './orden/orden';
import { Producto } from './producto/producto';
import { Ventas } from './ventas/ventas';
import { EncryptModule } from './encrypt/encrypt.module';
import { User } from './user/user';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Rol } from './rol/rol';
import { RoleModule } from './rol/rol.module';


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
        User,
        AuxiliarProducto,
        Categoria,
        Orden,
        Producto,
        Ventas,
        Rol
      ],
      synchronize: true,
    }),
    CategoriaModule, 
    ProductoModule, 
    OrdenModule, 
    VentasModule, 
    AuxiliarProductoModule,
    EncryptModule,
    UserModule,
    AuthModule,
    RoleModule
  
    
  ],
  controllers: [
    AppController, 
  ],
  providers: [
   AppService,     
  ],
})
export class AppModule {}

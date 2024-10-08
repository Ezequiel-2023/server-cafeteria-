//User Controller
import { Body, Controller, Get, Param, Post, Put, Delete, Patch, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { Role } from 'src/auth/rol.enum';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
     // consultar a todos los usuarios 
     @Get()
     async findAll(): Promise<User[]> {
       return this.userService.findAll();
     }
     // buscar un usuario por su id
     @Get(':id')
     async findOne(@Param('id') id: number): Promise<User> {
       return this.userService.findOne(id);
     }
    // crear un nuevo usuario y asignar un rol
     @Post()
     async create(@Body() userData: Partial<User>): Promise<User> {
       const rol = await this.userService.findRolById(userData.rol.idRol); // Obtener el rol
       if (rol.nombre === Role.Estudiante && !userData.email.endsWith('@galileo.edu')) {
         throw new UnauthorizedException('Los estudiantes deben usar un correo de @galileo.edu');
       } else if ((rol.nombre === Role.Empleado || rol.nombre === Role.Administrador) && !userData.email.endsWith('@gmail.com')) {
         throw new UnauthorizedException('Empleados y Administradores deben usar un correo de @gmail.com');
       }
       return this.userService.create(userData);
     }

    // actualizar datos del usuario 
     @Put(':id')
     async update(@Param('id') id: number, @Body() updateData: Partial<User>): Promise<User> {
       return this.userService.update(id, updateData);
     }
     //actualizar parcialmente a un usuario 
     @Patch(':id')
     async partialUpdate(@Param('id') id: number, @Body() updateData: Partial<User>): Promise<User> {
       return this.userService.update(id, updateData);
     }
     // eliminar a un usuario por su id
     @Delete(':id')
     async delete(@Param('id') id: number): Promise<void> {
        return this.userService.delete(id)
     }
}


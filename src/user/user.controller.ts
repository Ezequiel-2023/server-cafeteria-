//User Controller
import { Body, Controller, Get, Param, Post, Put, Delete, Patch, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { Role } from 'src/auth/rol.enum';
import { Roles } from 'src/auth/roles.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

     @Get()
     async findAll(): Promise<User[]> {
       return this.userService.findAll();
     }
   
     @Get(':id')
     async findOne(@Param('id') id: number): Promise<User> {
       return this.userService.findOne(id);
     }

     @Post()
     @Roles(Role.Administrador)  // Solo administradores pueden crear empleados
     async create(@Body() UserData: Partial<User>): Promise<User> {
     if (UserData.rol === Role.Estudiante && !UserData.email.endsWith('@galileo.edu')) {
     throw new UnauthorizedException('Los estudiantes deben usar un correo de @galileo.edu');
     }
     return this.userService.create(UserData);
    }

   
     @Put(':id')
     async update(@Param('id') id: number, @Body() updateData: Partial<User>): Promise<User> {
       return this.userService.update(id, updateData);
     }
   
     @Patch(':id')
     async partialUpdate(@Param('id') id: number, @Body() updateData: Partial<User>): Promise<User> {
       return this.userService.update(id, updateData);
     }
   
     @Delete(':id')
     async delete(@Param('id') id: number): Promise<void> {
        return this.userService.delete(id)
     }
}


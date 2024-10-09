//User Controller
// user.controller.ts
import { Body, Controller, Get, Param, Post, Put, Delete, Patch, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { Role } from 'src/auth/rol.enum';
import { CreateUserDto } from './create-user.dto';  // Importa el DTO

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Consultar a todos los usuarios
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Buscar un usuario por su ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  // Crear un nuevo usuario y asignar un rol
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {  // Usa el DTO aquí
    const rol = await this.userService.findRolById(createUserDto.rol_id);  // Obtener el rol
    if (rol.nombre === Role.Estudiante && !createUserDto.email.endsWith('@galileo.edu')) {
      throw new UnauthorizedException('Los estudiantes deben usar un correo de @galileo.edu');
    } else if ((rol.nombre === Role.Empleado || rol.nombre === Role.Administrador) && !createUserDto.email.endsWith('@gmail.com')) {
      throw new UnauthorizedException('Empleados y Administradores deben usar un correo de @gmail.com');
    }
    return this.userService.create(createUserDto);
  }

  // Actualizar datos del usuario
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<User>): Promise<User> {
    return this.userService.update(id, updateData);
  }

  // Actualizar parcialmente a un usuario
  @Patch(':id')
  async partialUpdate(@Param('id') id: number, @Body() updateData: Partial<User>): Promise<User> {
    return this.userService.update(id, updateData);
  }

  // Eliminar a un usuario por su ID
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}

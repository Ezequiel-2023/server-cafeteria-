import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // Obtener todos los usuarios
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    // Obtener un usuario por ID
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(Number(id));
    }

    // Crear un nuevo usuario
    @Post()
    async create(@Body() createUserDto: Partial<User>): Promise<User> {
        return this.userService.create(createUserDto);
    }

    // Actualizar un usuario existente
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: Partial<User>,
    ): Promise<User> {
        return this.userService.update(Number(id), updateUserDto);
    }

    // Eliminar un usuario
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.userService.remove(Number(id));
    }
}


import { Body, Controller, Get, Param, Post, Put, Delete, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';

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
     async create(@Body() UserData: Partial<User>): Promise<User> {
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


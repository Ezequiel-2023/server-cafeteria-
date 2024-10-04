//auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { EncryptService } from '../encrypt/encrypt.service';
import { Role } from './rol.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private readonly encryptService: EncryptService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    // Buscar al usuario por email o username (ID)
    const user = await this.usersService.findByUsernameOrEmail(username);

    // Validar la contraseña
    const isPasswordValid = await this.encryptService.comparePassword(pass, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Validar si el usuario es estudiante y si tiene un correo válido de @galileo.edu
    if (user.rol.nombre === Role.Estudiante && !user.email.endsWith('@galileo.edu')) {
      throw new UnauthorizedException('Los estudiantes deben iniciar sesión con un correo @galileo.edu');
    }

    // Crear el payload para el JWT
    const payload = { sub: user.idUser, nombre: user.nombre, rol: user.rol.nombre };  // Acceder al nombre del rol

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

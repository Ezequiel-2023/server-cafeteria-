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
    //console.log('Iniciando sesión para:', username);
    const user = await this.usersService.findByUsernameOrEmail(username);

    if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
    }

    const isPasswordValid = await this.encryptService.comparePassword(pass, user.password);
    if (!isPasswordValid) {
        throw new UnauthorizedException('Credenciales inválidas');
    }

    if (user.rol.nombre === Role.Estudiante && !user.email.endsWith('@galileo.edu')) {
        throw new UnauthorizedException('Los estudiantes deben iniciar sesión con un correo @galileo.edu');
    }

    const payload = { sub: user.idUser, nombre: user.nombre, rol: user.rol.nombre };

    //console.log('Payload creado:', payload);
    return {
        access_token: await this.jwtService.signAsync(payload),
    };
}

}


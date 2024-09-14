import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptService {
    private readonly saltRounds = 10;
    constructor(
    ){}
        async hashPassword (password: string) : Promise<string>{
            return bcrypt.hash(password, this.saltRounds);
        }
        async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean>{
            console.log('hashed password:' + hashedPassword )
            this.hashPassword(plainPassword).then(rs =>{
                console.log('informacion' + hashedPassword )
            })
            return bcrypt.compare(plainPassword,hashedPassword);
        }
  
}

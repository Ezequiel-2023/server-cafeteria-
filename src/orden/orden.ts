import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Orden {
    @PrimaryGeneratedColumn('increment')
    numeroOrden: number;
    @Column()
    descripcion: string;
    @Column()
    total: number;
    @Column()
    nombreCLiente: string;
    @Column()
    hora: string; 
}

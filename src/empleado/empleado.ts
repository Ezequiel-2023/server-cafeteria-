import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Empleado {
    @PrimaryGeneratedColumn('increment')
    idEmpleado: number;
    @Column({unique:true})
    nombre: string;
}

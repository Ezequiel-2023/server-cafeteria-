import { Administrador } from "src/administrador/administrador";
import { Ventas } from "src/ventas/ventas";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Empleado {
    @PrimaryGeneratedColumn('increment')
    idEmpleado: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    email: string;
    @Column()
    telefono: number;
    @Column()
    direccion: string;
    @Column()
    rol: string
    @Column()
    password: string;

    @ManyToOne(() => Administrador, administrador => administrador.empleados)
    administrador: Administrador;

    @OneToMany(() => Ventas, venta => venta.empleado)
    ventas: Ventas[];
}


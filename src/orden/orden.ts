import { AuxiliarProducto } from "src/auxiliar-producto/auxiliar-producto";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ventas } from "src/ventas/ventas";
import { User } from 'src/user/user';
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

    @OneToMany(()=> AuxiliarProducto, (auxiliar)=> auxiliar.orden)
    auxiliares: AuxiliarProducto[];

    @OneToMany(()=> Ventas, (venta)=> venta.orden)
    ventas: Ventas[];

    @ManyToOne(() => User, (user) => user.ordenes)
  user: User; // El estudiante que realiza la orden
}


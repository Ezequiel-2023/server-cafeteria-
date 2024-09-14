import { AuxiliarProducto } from "src/auxiliar-producto/auxiliar-producto";
import { Estudiante } from "src/estudiante/estudiante";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ventas } from "src/ventas/ventas";
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

    @ManyToOne(() => Estudiante, estudiante => estudiante.ordenes)
    estudiante: Estudiante;

    @OneToMany(() => AuxiliarProducto, auxiliar => auxiliar.orden)
    auxiliares: AuxiliarProducto[];

    @OneToMany(() => Ventas, venta => venta.orden)
    ventas: Ventas[];
}


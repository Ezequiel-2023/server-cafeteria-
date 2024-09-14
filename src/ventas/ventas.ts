import { Empleado } from "src/empleado/empleado";
import { Orden } from "src/orden/orden";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Ventas {
    @PrimaryGeneratedColumn('increment')
    idVentas: number;
    fecha: Date;
    descripcion: string;
    @ManyToOne(() => Empleado, empleado => empleado.ventas)
    empleado: Empleado;
    @ManyToOne(() => Orden, orden => orden.ventas)
    orden: Orden;
   
}



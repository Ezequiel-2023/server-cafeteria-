import { Orden } from "src/orden/orden";
import { Producto } from "src/producto/producto";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class AuxiliarProducto {
    @PrimaryGeneratedColumn('increment')
    idAuxiliar: number;
    @Column()
    cantidad: number; 
    @ManyToOne(() => Orden, orden => orden.auxiliares)
    orden: Orden;

    @ManyToOne(() => Producto, producto => producto.auxiliares)
    producto: Producto;  
}

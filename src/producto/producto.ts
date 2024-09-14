import { AuxiliarProducto } from "src/auxiliar-producto/auxiliar-producto";
import { Categoria } from "src/categoria/categoria";
import { Column, Decimal128, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Url } from "url";

@Entity()

export class Producto {
    @PrimaryGeneratedColumn('increment')
    idProducto: number;
    @Column()
    nombre: string;
    @Column()
    precio: number ;
    @Column()
    descripcion: string ;
    @Column()
    imagen: Url ;
    @Column()
    cantidad: number;

    @ManyToOne(() => Categoria, categoria => categoria.productos)
    categoria: Categoria;

    @OneToMany(() => AuxiliarProducto, auxiliar => auxiliar.producto)
    auxiliares: AuxiliarProducto[];
}

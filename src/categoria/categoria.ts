import { Producto } from "src/producto/producto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Categoria {
    @PrimaryGeneratedColumn('increment')
    idCategoria: number;
    @Column()
    descripcionCateori: string;
    @OneToMany(()=> Producto, (producto)=> producto.categoria)
    productos: Producto[];
}

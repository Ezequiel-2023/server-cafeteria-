import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Categoria {
    @PrimaryGeneratedColumn('increment')
    idCategoria: number;
    @Column()
    descripcionCateori: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Categoria {
    @PrimaryGeneratedColumn('increment')
    idCateoria: number;
    @Column({unique:true})
    descripcionCateori: string;
}

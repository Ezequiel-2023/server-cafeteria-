import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Orden {
    @PrimaryGeneratedColumn('increment')
    numeroOrden: number;
    @Column({unique:true})
    descripcion: string;
    @Column()
    total: number;
    @Column()
    nombreColecta: string;
    
}

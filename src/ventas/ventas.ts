import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Ventas {
    @PrimaryGeneratedColumn('increment')
    idVentas: number;
    fecha: Date;
    descripcion: string;
}

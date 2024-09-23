
import { Orden } from "src/orden/orden";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from 'src/user/user';
@Entity()

export class Ventas {
    @PrimaryGeneratedColumn('increment')
    idVentas: number;
    @Column()
    fecha: Date;
    @Column()
    descripcion: string;

    @ManyToOne(()=> Orden, (orden)=> orden.ventas)
    orden: Orden;
   
    @ManyToOne(() => User, (user) => user.ventas)
  user: User; // El empleado que procesa la venta
}



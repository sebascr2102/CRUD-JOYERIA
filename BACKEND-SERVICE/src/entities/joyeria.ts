import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class joyeria {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  materiales!: string;

  @Column("text")
  description!: any;

  @Column("decimal")
  precio!: any ;

  @Column()
  moda! : any;

  @Column()
  diseno! : any
  static moda: any;
  static precio: any;
  static diseno: any;
  static materiales: any;
 
  
}
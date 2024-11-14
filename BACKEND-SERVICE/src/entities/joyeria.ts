import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class joyeria {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  materiales!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  precio!: number ;

  @Column()
  moda! : string;

  @Column()
  diseno! : string  
}
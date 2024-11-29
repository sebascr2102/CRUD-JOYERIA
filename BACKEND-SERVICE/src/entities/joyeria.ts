import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class joyeria{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;

  @Column("text")
  imgUrl!: string;
}

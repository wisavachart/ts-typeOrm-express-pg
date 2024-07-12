import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  isActive: boolean;
}

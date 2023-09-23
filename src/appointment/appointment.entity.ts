import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../customer/customer.entity";

@Entity()
export class Appointment{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  description: string;

  // Relationships
  @ManyToOne(() => Customer, customer => customer.appointments)
  customer: Customer;
}

import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "../appointment/appointment.entity";
import { Account } from "../account/account.entity";
import { User } from "../auth/user.entity";

@Entity()
export class Customer{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  // Relationships
  @ManyToOne(() => User, user => user.customers)
  user: User;

  @OneToMany(() => Account, account => account.customer)
  accounts: Account[];

  @OneToMany(() => Appointment, appointment => appointment.customer)
  appointments: Appointment[];
}

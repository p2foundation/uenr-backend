import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "../account/account.entity";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column({ type: 'enum', enum: ['Bill Payment', 'Loan Payment', 'School Payment'] })
  paymentType: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  program: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;


  // Relationships
  @ManyToOne(() => Account, account => account.payments)
  account: Account;
}

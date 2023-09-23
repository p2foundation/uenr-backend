import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "../account/account.entity";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ type: 'enum', enum: ['Bill Payment', 'Loan Payment'] })
  type: string;

  // Relationships
  @ManyToOne(() => Account, account => account.payments)
  account: Account;
}

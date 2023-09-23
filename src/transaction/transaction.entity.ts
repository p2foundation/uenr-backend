import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "../account/account.entity";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ type: 'enum', enum: ['Deposit', 'Withdrawal', 'Transfer'] })
  type: string;

  // Relationships
  @ManyToOne(() => Account, account => account.transactions)
  account: Account;
}

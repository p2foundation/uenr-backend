import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../customer/customer.entity";
import { Transaction } from "../transaction/transaction.entity";
import { Payment } from "../payment/payment.entity";
import { Transfer } from "../transfer/transfer.entity";
import { User } from "../auth/user.entity";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountName: string;

  @Column({ type: "enum", enum: ["Current","Checking", "Savings"] })
  accountType: string;

  @Column()
  accountNumber: string;

  @Column()
  accountBalance: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;


  // Relationships
  @ManyToOne(() => Customer, customer => customer.accounts)
  customer: Customer;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @OneToMany(() => Transaction, transaction => transaction.account)
  transactions: Transaction[];

  @OneToMany(() => Payment, payment => payment.account)
  payments: Payment

  @ManyToOne(() => Account, (account) => account.senderAccount)
  senderAccount: Account;

  @ManyToOne(() => Account, (account) => account.receiverAccount)
  receiverAccount: Account;
}

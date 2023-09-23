import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../customer/customer.entity";
import { Transaction } from "../transaction/transaction.entity";
import { Payment } from "../payment/payment.entity";
import { Transfer } from "../transfer/transfer.entity";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: ["Current","Checking", "Savings"] })
  type: string;

  @Column()
  balance: number;

  // Relationships
  @ManyToOne(() => Customer, customer => customer.accounts)
  customer: Customer;

  @OneToMany(() => Transaction, transaction => transaction.account)
  transactions: Transaction[];

  @OneToMany(() => Payment, payment => payment.account)
  payments: Payment

  @OneToMany(() => Transfer, transfer => transfer.sourceAccount)
  sourceAccount: Transfer
  @OneToMany(()=> Transfer, (transfer)=>transfer.destinationAccount)
  destinationAccount
}

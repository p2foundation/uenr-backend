import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "../account/account.entity";

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  // Relationships
  @ManyToOne(() => Account, account => account.sourceAccount)
  sourceAccount: Account;

  @ManyToOne(() => Account, account => account.destinationAccount)
  destinationAccount: Account;
}

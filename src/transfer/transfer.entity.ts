import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "../account/account.entity";

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;


  // Relationships
  // @ManyToOne(() => Account, account => account.sourceAccount)
  // sourceAccount: Account;
  //
  // @ManyToOne(() => Account, account => account.destinationAccount)
  // destinationAccount: Account;

  @OneToMany(() => Transfer, (transfer) => transfer.outgoingTransfers)
  outgoingTransfers: Transfer[];

  @OneToMany(() => Transfer, (transfer) => transfer.incomingTransfers)
  incomingTransfers: Transfer[];
}

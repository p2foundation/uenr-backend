import { Expose } from "class-transformer";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Customer } from "../customer/customer.entity";
import { Account } from "../account/account.entity";

@Entity()
@ObjectType()
export class User {
  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @Expose()
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Expose()
  @Field()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  @Expose()
  @Field()
  email: string;

  @Column()
  @Expose()
  @Field()
  firstName: string;

  @Column()
  @Expose()
  @Field()
  lastName: string;

  @Column()
  @Expose()
  @Field()
  phoneNumber: string;


  @OneToOne(() => Profile)
  @JoinColumn()
  @Expose()
  profile: Profile;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;


  // Relationships
  @OneToMany(() => Customer, customer => customer.user)
  customers: Customer[];


  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

}

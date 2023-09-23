import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Profile } from "./../auth/profile.entity";
import { User } from "./../auth/user.entity";
import { Account } from "../account/account.entity";
import { Appointment } from "../appointment/appointment.entity";
import { Customer } from "../customer/customer.entity";
import { Payment } from "../payment/payment.entity";
import { Transaction } from "../transaction/transaction.entity";
import { Transfer } from "../transfer/transfer.entity";


export default registerAs(
  "orm.config",
  (): TypeOrmModuleOptions => ({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Profile, Account, Appointment, Customer, Payment, Transaction, Transfer],
    synchronize: true,
    dropSchema: Boolean(parseInt(process.env.DB_DROP_SCHEMA))
  })
);

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import ormConfig from "./config/orm.config";
import { TransactionModule } from "./transaction/transaction.module";
import { AccountModule } from "./account/account.module";
import { TransferModule } from "./transfer/transfer.module";
import ormConfigProd from "./config/orm.config.prod";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentModule } from "./payment/payment.module";
import { CustomerModule } from './customer/customer.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
      expandVariables: true,
      envFilePath: `${process.env.NODE_ENV ?? "dev"}.env`
    }),
    TypeOrmModule.forRootAsync({
      useFactory: process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd,
    }),
    AuthModule,
    TransactionModule,
    // AccountModule,
    TransferModule,
    PaymentModule,
    CustomerModule,
    AppointmentModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService
    },
    {
      provide: "APP_NAME",
      useValue: "UENR BACKEND"
    }
  ]
})
export class AppModule {
}

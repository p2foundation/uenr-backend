import { Module } from "@nestjs/common";
import { AccountController } from './account.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./account.entity";
import { AccountService } from './account.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account])
  ],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {
}

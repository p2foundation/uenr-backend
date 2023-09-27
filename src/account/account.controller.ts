// src/accounts/account.controller.ts
import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { Account } from "./account.entity";
import { AccountService } from "./account.service";
import { CreateAccountDto } from "./input/create.account.dto";
import { User } from "../auth/user.entity";

@Controller("account")
export class AccountController {
  constructor(
    private readonly accountService: AccountService) {
  }

  @Get()
  findAll(): Promise<Account[]> {
    return this.accountService.getAllAccounts();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Account> {
    return this.accountService.findOne(Number(id));
  }

  @Post("opendoug")
  create(
    @Body() user: User,
    @Body() accountDto: CreateAccountDto
  ): Promise<Account> {
    return this.accountService.createAccount(accountDto, user);
  }
}

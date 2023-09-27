import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Account } from "./account.entity";
import { CreateAccountDto } from "./input/create.account.dto";
import { User } from "../auth/user.entity";

@Injectable()
export class AccountService {
private logger = new Logger(AccountService.name);

  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
    private readonly userRepository: Repository<User>
  ) {
  }

  async createAccount(accountDto: CreateAccountDto, user: User): Promise<Account> {
    const account = new Account();
    account.user = user;
    // Generate a unique account number (you can implement this logic)
    account.accountNumber = '9087654321';
    this.logger.debug( `account input ==> ${account}`);
    return this.accountRepository.save(account);
  }

  async getAccountsByUser(userId: number): Promise<Account[]> {
    return this.accountRepository.find({ where: { user: { id: userId } } });
  }


  async getAllAccounts(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  async findOne(id: number): Promise<Account> {
    return this.accountRepository.findOne({where: {id: id}});
  }
}

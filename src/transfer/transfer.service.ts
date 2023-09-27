import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Transfer } from "./transfer.entity";

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(Transfer)
    private readonly transferRepository: Repository<Transfer>
  ) {
  }

  async findAll(): Promise<Transfer[]> {
    return this.transferRepository.find();
  }

  async findOne(id: number): Promise<Transfer> {
    return this.transferRepository.findOne({where: {id: id}});
  }

  async create(transfer: Transfer): Promise<Transfer> {
    return this.transferRepository.save(transfer);
  }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Payment } from "./payment.entity";
import { Account } from "../account/account.entity";

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>
  ) {
  }

  async create(payment: Payment): Promise<Payment> {
    return this.paymentRepository.save(payment);
  }



  async getAllPayments(): Promise<Payment[]> {
    return this.paymentRepository.find();
  }
}

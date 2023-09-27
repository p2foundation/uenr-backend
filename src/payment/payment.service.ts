import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Payment } from "./payment.entity";
import { PaymentDto } from "./input/payment.dto";

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>
  ) {
  }

  async create(paymentDto: PaymentDto): Promise<Payment> {

    const payment = new Payment();
  
    // Assuming PaymentDto has the same fields as Payment
    Object.assign(payment, paymentDto);
  
    const payInputs = await this.paymentRepository.save(payment);
  
    return payInputs;
    
  }



  async getAllPayments(): Promise<Payment[]> {
    return this.paymentRepository.find();
  }
}

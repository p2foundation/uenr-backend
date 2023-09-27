import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { Payment } from "./payment.entity";
import { Account } from "../account/account.entity";

@Controller("payments")
export class PaymentController {
  private logger = new Logger(PaymentService.name);

  constructor(private readonly paymentService: PaymentService) {
  }

  @Get()
  async findAllPayment(): Promise<Payment[]> {
    const allPay = await this.paymentService.getAllPayments();
    this.logger.debug(`find all payment ===> ${JSON.stringify(allPay)}`)
    return allPay
  }

  @Post()
  async create(@Body() payment: Payment): Promise<Payment> {
    const pays = await this.paymentService.create(payment);
    this.logger.debug(`create payment ===> ${JSON.stringify(pays)}`)
    return pays;
  }
}

import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { Payment } from "./payment.entity";
import { Account } from "../account/account.entity";
import { PaymentDto } from "./input/payment.dto";

@Controller("payment")
export class PaymentController {
  private logger = new Logger(PaymentService.name);

  constructor(private readonly paymentService: PaymentService) {
  }

  @Get("/allpay")
  async findAllPayment(): Promise<Payment[]> {
    const allPay = await this.paymentService.getAllPayments();
    this.logger.debug(`find all payment ===> ${JSON.stringify(allPay)}`)
    return allPay
  }

  @Post("/makepayment")
  async create(@Body() paymentDto: PaymentDto): Promise<Payment> {
    const pays = await this.paymentService.create(paymentDto);
    this.logger.debug(`create payment ===> ${JSON.stringify(pays)}`)
    return pays;
  }
}

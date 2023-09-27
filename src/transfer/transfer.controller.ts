import { TransferService } from "./transfer.service";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Transfer } from "./transfer.entity";


@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Get()
  findAll(): Promise<Transfer[]> {
    return this.transferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Transfer> {
    return this.transferService.findOne(Number(id));
  }

  @Post()
  create(@Body() transfer: Transfer): Promise<Transfer> {
    return this.transferService.create(transfer);
  }
}


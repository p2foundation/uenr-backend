import { Module } from "@nestjs/common";
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Transfer } from "./transfer.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Transfer])
  ],
  controllers: [TransferController],
  providers: [TransferService]
})
export class TransferModule {
}

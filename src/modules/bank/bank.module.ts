import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from '@common/entities';
import { TransactionModule } from '@/modules/transaction/transaction.module';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BankSchema } from '@/modules/bank/dto/schema/create-bank';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bank.name, schema: BankSchema }]),
  ],
  controllers: [BankController],
  providers: [BankService],
  exports: [BankService],
})
export class BankModule {}

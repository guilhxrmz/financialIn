import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import {Category, Transaction} from '@common/entities';
import { BankModule } from '@/modules/bank/bank.module';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from '@/modules/transaction/dto/schema/create-transaction';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [TransactionService],
})
export class TransactionModule {}

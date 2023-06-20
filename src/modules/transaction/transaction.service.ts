import {
  Inject,
  Injectable,
  forwardRef,
  BadRequestException,
} from '@nestjs/common';
import { Transaction } from '@/modules/transaction/dto/schema/create-transaction';
import { CreateTransactionDto, FindAllResponse, GetAllParamsDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
  ) {}

  async create(body: CreateTransactionDto): Promise<Transaction> {
    const createdTransaction = new this.transactionModel(body);
    return createdTransaction.save();
  }

  async delete(id: string): Promise<void> {
    const transaction = await this.transactionModel.findById(id);
    if (!transaction) {
      throw new BadRequestException('Wrong transaction id');
    }
    await transaction.deleteOne();
  }

  async findById(id: string): Promise<Transaction> {
    return this.transactionModel.findById(id);
  }

  async findAll(params: GetAllParamsDto): Promise<Transaction[]> {
    return this.transactionModel.find();
  }
}

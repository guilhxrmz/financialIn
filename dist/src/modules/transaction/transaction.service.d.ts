import { Transaction } from '@/modules/transaction/dto/schema/create-transaction';
import { CreateTransactionDto, GetAllParamsDto } from './dto';
import { Model } from 'mongoose';
export declare class TransactionService {
    private transactionModel;
    constructor(transactionModel: Model<Transaction>);
    create(body: CreateTransactionDto): Promise<Transaction>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Transaction>;
    findAll(params: GetAllParamsDto): Promise<Transaction[]>;
}

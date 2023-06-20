import { FindById } from '@common/types';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto, GetAllParamsDto } from './dto';
import { Transaction } from '@/modules/transaction/dto/schema/create-transaction';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    createTransaction(body: CreateTransactionDto): Promise<Transaction>;
    deleteTransaction(params: FindById): Promise<void>;
    getAllTransactions(params: GetAllParamsDto): Promise<Transaction[]>;
}

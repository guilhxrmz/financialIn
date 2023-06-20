import { Bank } from '@/modules/bank/dto/schema/create-bank';
import { FindById } from '@common/types';
import { BankService } from './bank.service';
import { CreateBankDto, UpdateBankDto } from './dto';
import { UpdateBankPayload } from '@/modules/bank/types';
export declare class BankController {
    private readonly bankService;
    constructor(bankService: BankService);
    createBank(body: CreateBankDto): Promise<CreateBankDto>;
    updateBank(params: FindById, body: UpdateBankDto): Promise<UpdateBankPayload>;
    deleteBank(params: FindById): Promise<void>;
    getBankById(params: FindById): Promise<Bank>;
    getAllBanks(): Promise<Bank[]>;
}

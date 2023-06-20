import { CreateBankDto } from './dto';
import { UpdateBankPayload } from './types';
import { Model } from 'mongoose';
import { Bank } from '@/modules/bank/dto/schema/create-bank';
export declare class BankService {
    private bankModel;
    constructor(bankModel: Model<Bank>);
    create(payload: CreateBankDto): Promise<CreateBankDto>;
    update(id: string, payload: UpdateBankPayload): Promise<UpdateBankPayload>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Bank>;
    findAll(): Promise<Bank[]>;
}

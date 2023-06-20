import { TransactionType } from '@common/types';
import { Bank, Category } from '@common/entities';
import { BaseEntity } from './Base.entity';
export declare class Transaction extends BaseEntity {
    amount: number;
    type: TransactionType;
    bank: Bank;
    categories: Category;
}

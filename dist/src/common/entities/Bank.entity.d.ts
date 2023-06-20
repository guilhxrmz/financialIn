import { Transaction } from '@common/entities';
import { BaseEntity } from './Base.entity';
export declare class Bank extends BaseEntity {
    name: string;
    balance: number;
    transactions: Transaction[];
}

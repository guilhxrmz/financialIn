import { Transaction } from '@common/entities';
import { BaseEntity } from './Base.entity';
export declare class Category extends BaseEntity {
    name: string;
    transactions: Transaction;
}

import { Transaction } from '@common/entities';
export declare class FindAllResponse {
    transactions: Transaction[];
    meta: {
        totalCount: number;
    };
}

export declare class CountTransactionsPayload {
    bank?: string;
    category?: string;
}
export declare class TransactionWebhookPayload {
    id: string;
    bank: string;
    type: string;
    amount: number;
    categories: string[];
}

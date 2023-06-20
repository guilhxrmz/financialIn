import mongoose, { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';
export type BankDocument = HydratedDocument<Bank>;
export declare class Bank extends Document {
    name: string;
    account: string;
    cvv: number;
}
export declare const BankSchema: mongoose.Schema<Bank, mongoose.Model<Bank, any, any, any, mongoose.Document<unknown, any, Bank> & Omit<Bank & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Bank, mongoose.Document<unknown, {}, mongoose.FlatRecord<Bank>> & Omit<mongoose.FlatRecord<Bank> & {
    _id: mongoose.Types.ObjectId;
}, never>>;

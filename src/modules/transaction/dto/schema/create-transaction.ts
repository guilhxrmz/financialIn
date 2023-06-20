import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction extends Document {
  @Prop()
  bankId: string;

  @Prop()
  type: string;

  @Prop()
  amount: number;

  @Prop()
  categoryId: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

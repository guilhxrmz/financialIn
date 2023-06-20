import mongoose, { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BankDocument = HydratedDocument<Bank>;

@Schema()
export class Bank extends Document {
  @Prop()
  name: string;

  @Prop()
  account: string;

  @Prop()
  cvv: number;
}

export const BankSchema = SchemaFactory.createForClass(Bank);

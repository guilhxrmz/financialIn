import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

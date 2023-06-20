import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto';
import { UpdateBankPayload } from './types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bank } from '@/modules/bank/dto/schema/create-bank';
@Injectable()
export class BankService {
  constructor(@InjectModel(Bank.name) private bankModel: Model<Bank>) {}

  async create(payload: CreateBankDto): Promise<CreateBankDto> {
    const createdBank = new this.bankModel(payload);
    return createdBank.save();
  }

  async update(
    id: string,
    payload: UpdateBankPayload,
  ): Promise<UpdateBankPayload> {
    const user = await this.bankModel.findById(id);
    user.updateOne(payload);
    return user.save();
  }

  async delete(id: string): Promise<void> {
    return this.bankModel.findById(id).deleteOne();
  }

  async findById(id: string): Promise<Bank> {
    return this.bankModel.findById(id);
  }

  async findAll(): Promise<Bank[]> {
    return this.bankModel.find().exec();
  }
}

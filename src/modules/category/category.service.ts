import { Injectable, BadRequestException } from '@nestjs/common';
import {
  CreateCategoryDto,
  GetStatisticParamsDto,
  GetStatisticResponseDto,
  UpdateCategoryDto,
} from './dto';
import { ICategoryBalance } from './types';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '@/modules/category/dto/schema/create-category';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async create(payload: CreateCategoryDto): Promise<Category> {
    try {
      const createdCategory = new this.categoryModel(payload);
      return createdCategory.save();
    } catch (e) {
      console.error(e.message);
    }
  }

  async update(
    id: string,
    payload: UpdateCategoryDto,
  ): Promise<UpdateCategoryDto> {
    const user = await this.categoryModel.findById(id);
    user.updateOne(payload);
    return user.save();
  }

  async delete(id: string): Promise<void> {
    return this.categoryModel.findById(id).deleteOne();
  }

  async findById(id: string): Promise<Category> {
    return this.categoryModel.findById(id);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find();
  }
}

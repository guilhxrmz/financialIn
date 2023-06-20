import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { Category } from '@/modules/category/dto/schema/create-category';
import { Model } from 'mongoose';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<Category>);
    create(payload: CreateCategoryDto): Promise<Category>;
    update(id: string, payload: UpdateCategoryDto): Promise<UpdateCategoryDto>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Category>;
    findAll(): Promise<Category[]>;
}

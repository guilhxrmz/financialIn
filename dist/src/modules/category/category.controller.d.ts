import { Category } from '@/modules/category/dto/schema/create-category';
import { FindById } from '@common/types';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(body: CreateCategoryDto): Promise<Category>;
    updateCategory(params: FindById, body: UpdateCategoryDto): Promise<UpdateCategoryDto>;
    deleteCategory(params: FindById): Promise<void>;
    getCategoryById(params: FindById): Promise<Category>;
    getAllCategories(): Promise<Category[]>;
}

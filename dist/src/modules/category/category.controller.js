"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("../../common/types");
const mocks_1 = require("../../common/mocks");
const category_service_1 = require("./category.service");
const dto_1 = require("./dto");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    createCategory(body) {
        return this.categoryService.create(body);
    }
    updateCategory(params, body) {
        return this.categoryService.update(params.id, body);
    }
    deleteCategory(params) {
        return this.categoryService.delete(params.id);
    }
    getCategoryById(params) {
        return this.categoryService.findById(params.id);
    }
    getAllCategories() {
        return this.categoryService.findAll();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create category' }),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update category by id' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.FindById,
        dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete category by id' }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.FindById]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get statistic by categories' }),
    (0, swagger_1.ApiResponse)({
        schema: {
            example: mocks_1.mockStatisticResponse,
        },
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Find category by id' }),
    (0, swagger_1.ApiResponse)({ type: dto_1.GetCategoryByIdResponseDto }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.FindById]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find all categories' }),
    (0, swagger_1.ApiResponse)({ type: [dto_1.GetCategoryByIdResponseDto] }),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCategories", null);
CategoryController = __decorate([
    (0, swagger_1.ApiTags)('category'),
    (0, common_2.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map
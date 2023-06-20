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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryByIdResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const mocks_1 = require("../../../common/mocks");
class GetCategoryByIdResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: mocks_1.mockCategory.id,
    }),
    __metadata("design:type", String)
], GetCategoryByIdResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: mocks_1.mockCategory.name,
    }),
    __metadata("design:type", String)
], GetCategoryByIdResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: mocks_1.mockCategory.createdAt,
    }),
    __metadata("design:type", String)
], GetCategoryByIdResponseDto.prototype, "createdAt", void 0);
exports.GetCategoryByIdResponseDto = GetCategoryByIdResponseDto;
//# sourceMappingURL=get-category-by-id-response.dto.js.map
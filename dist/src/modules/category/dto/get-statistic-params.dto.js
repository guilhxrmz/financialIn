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
exports.GetStatisticParamsDto = void 0;
const mocks_1 = require("../../../common/mocks");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GetStatisticParamsDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: [mocks_1.mockCategory.id] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], GetStatisticParamsDto.prototype, "categoryIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2023-02-23T10:28:24.038Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetStatisticParamsDto.prototype, "fromPeriod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2023-02-24T20:28:24.038Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetStatisticParamsDto.prototype, "toPeriod", void 0);
exports.GetStatisticParamsDto = GetStatisticParamsDto;
//# sourceMappingURL=get-statistic-params.dto.js.map
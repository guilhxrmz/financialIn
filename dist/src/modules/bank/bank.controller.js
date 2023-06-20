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
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const types_1 = require("../../common/types");
const bank_service_1 = require("./bank.service");
const dto_1 = require("./dto");
let BankController = class BankController {
    constructor(bankService) {
        this.bankService = bankService;
    }
    createBank(body) {
        return this.bankService.create(body);
    }
    updateBank(params, body) {
        return this.bankService.update(params.id, body);
    }
    deleteBank(params) {
        return this.bankService.delete(params.id);
    }
    getBankById(params) {
        return this.bankService.findById(params.id);
    }
    getAllBanks() {
        return this.bankService.findAll();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create bank' }),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateBankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "createBank", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update bank by id' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.FindById,
        dto_1.UpdateBankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "updateBank", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete bank by id' }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.FindById]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "deleteBank", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find bank by id' }),
    (0, swagger_1.ApiResponse)({ type: dto_1.GetBankByIdResponseDto }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.FindById]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "getBankById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find all banks' }),
    (0, swagger_1.ApiResponse)({ type: [dto_1.GetBankByIdResponseDto] }),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BankController.prototype, "getAllBanks", null);
BankController = __decorate([
    (0, swagger_1.ApiTags)('bank'),
    (0, common_2.Controller)('bank'),
    __metadata("design:paramtypes", [bank_service_1.BankService])
], BankController);
exports.BankController = BankController;
//# sourceMappingURL=bank.controller.js.map
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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("../../common/types");
const transaction_service_1 = require("./transaction.service");
const dto_1 = require("./dto");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    createTransaction(body) {
        return this.transactionService.create(body);
    }
    deleteTransaction(params) {
        return this.transactionService.delete(params.id);
    }
    getAllTransactions(params) {
        return this.transactionService.findAll(params);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create transaction' }),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "createTransaction", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete transaction by id' }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.FindById]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "deleteTransaction", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find all transactions' }),
    (0, swagger_1.ApiResponse)({ type: [dto_1.FindAllResponse] }),
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetAllParamsDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getAllTransactions", null);
TransactionController = __decorate([
    (0, swagger_1.ApiTags)('transaction'),
    (0, common_1.Controller)('transaction'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map
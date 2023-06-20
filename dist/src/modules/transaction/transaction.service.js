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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const create_transaction_1 = require("./dto/schema/create-transaction");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TransactionService = class TransactionService {
    constructor(transactionModel) {
        this.transactionModel = transactionModel;
    }
    async create(body) {
        const createdTransaction = new this.transactionModel(body);
        return createdTransaction.save();
    }
    async delete(id) {
        const transaction = await this.transactionModel.findById(id);
        if (!transaction) {
            throw new common_1.BadRequestException('Wrong transaction id');
        }
        await transaction.deleteOne();
    }
    async findById(id) {
        return this.transactionModel.findById(id);
    }
    async findAll(params) {
        return this.transactionModel.find();
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(create_transaction_1.Transaction.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map
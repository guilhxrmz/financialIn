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
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const create_bank_1 = require("./dto/schema/create-bank");
let BankService = class BankService {
    constructor(bankModel) {
        this.bankModel = bankModel;
    }
    async create(payload) {
        const createdBank = new this.bankModel(payload);
        return createdBank.save();
    }
    async update(id, payload) {
        const user = await this.bankModel.findById(id);
        user.updateOne(payload);
        return user.save();
    }
    async delete(id) {
        return this.bankModel.findById(id).deleteOne();
    }
    async findById(id) {
        return this.bankModel.findById(id);
    }
    async findAll() {
        return this.bankModel.find().exec();
    }
};
BankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(create_bank_1.Bank.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BankService);
exports.BankService = BankService;
//# sourceMappingURL=bank.service.js.map
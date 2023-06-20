"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankModule = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../common/entities");
const bank_controller_1 = require("./bank.controller");
const bank_service_1 = require("./bank.service");
const mongoose_1 = require("@nestjs/mongoose");
const create_bank_1 = require("./dto/schema/create-bank");
let BankModule = class BankModule {
};
BankModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: entities_1.Bank.name, schema: create_bank_1.BankSchema }]),
        ],
        controllers: [bank_controller_1.BankController],
        providers: [bank_service_1.BankService],
        exports: [bank_service_1.BankService],
    })
], BankModule);
exports.BankModule = BankModule;
//# sourceMappingURL=bank.module.js.map
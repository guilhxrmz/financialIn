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
exports.Transaction = void 0;
const typeorm_1 = require("typeorm");
const types_1 = require("../types");
const entities_1 = require("./");
const Base_entity_1 = require("./Base.entity");
let Transaction = class Transaction extends Base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        scale: 2,
        default: 0,
        nullable: false,
    }),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: types_1.TransactionType,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], Transaction.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Bank, (bank) => bank.transactions),
    __metadata("design:type", entities_1.Bank)
], Transaction.prototype, "bank", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_1.Category, (category) => category.transactions),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", entities_1.Category)
], Transaction.prototype, "categories", void 0);
Transaction = __decorate([
    (0, typeorm_1.Entity)({ name: 'transaction' })
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.entity.js.map
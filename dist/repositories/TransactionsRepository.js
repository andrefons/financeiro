"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = __importDefault(require("../models/Transaction"));
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    TransactionsRepository.prototype.all = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        var balance = this.transactions.reduce(function (previousValue, currentValue) {
            switch (currentValue.type) {
                case 'income': {
                    previousValue.income += currentValue.value;
                    break;
                }
                case 'outcome': {
                    previousValue.outcome += currentValue.value;
                    break;
                }
                default:
                    break;
            }
            return previousValue;
        }, {
            income: 0,
            outcome: 0,
            total: 0,
        });
        balance.total = balance.income - balance.outcome; // rever
        return balance;
    };
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        var transaction = new Transaction_1.default({
            title: title,
            value: value,
            type: type,
        });
        this.transactions.push(transaction);
        return transaction;
    };
    return TransactionsRepository;
}());
exports.default = TransactionsRepository;

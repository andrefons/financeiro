"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var transaction_routes_1 = __importDefault(require("./routes/transaction.routes"));
app_1.default.use(transaction_routes_1.default);
app_1.default.listen(3333, function () {
    console.log('🚀 Server started on port 3333!');
});

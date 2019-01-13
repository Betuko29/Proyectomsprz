"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var basededatos = process.env.BD || "Redytel";
var usuario = process.env.USER || "sa";
var pwd = process.env.PWD || "milka";
var host = process.env.HOST || "127.0.0.1";
var dev = new sequelize_1.default(basededatos, usuario, pwd, {
    dialect: "mssql",
    host: host,
    operatorsAliases: false,
    pool: {
        acquire: 30000,
        idle: 10000,
        max: 5,
        min: 0,
    },
});
exports.default = dev;

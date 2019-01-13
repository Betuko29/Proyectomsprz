"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var db = process.env.BD || "Redytel";
var user = process.env.USER_DB || "sa";
var pwd = "milka";
var host = process.env.HOST || "localhost";
var sequelize = new sequelize_1.default(db, user, pwd, {
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
var Models = {
    empleado: sequelize.import("../models/empleado"),
    huellas: sequelize.import("../models/huellas"),
    historial: sequelize.import("../models/historial"),
};
Object.keys(Models).forEach(function (key) {
    if ('associate' in Models[key]) {
        Models[key].associate(Models);
    }
});
Models.sequelize = sequelize;
Models.Sequelize = sequelize_1.default;
exports.default = Models;

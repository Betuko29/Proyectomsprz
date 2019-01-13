"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var huellas = function (sequelize, DataTypes) {
    // tslint:disable-next-line:indent
    var Huellas = sequelize.define("Huellas", {
        huella: {
            type: DataTypes.STRING,
        },
        uuid: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
    });
    Huellas.associate = function (models) {
        Huellas.belongsTo(models.empleado);
    };
    return Huellas;
};
exports.default = huellas;

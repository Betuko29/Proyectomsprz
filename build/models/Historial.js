"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var historial = function (sequelize, DataTypes) {
    var historial = sequelize.define("Historial", {
        uuid: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        accion: {
            type: DataTypes.STRING,
        },
        fechAccion: {
            type: DataTypes.DATE,
        }
    });
    historial.associate = function (models) {
        historial.hasMany(models.huellas);
    };
    return historial;
};
exports.default = historial;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var habilidades = function (sequelize, DataTypes) {
    var Habilidades = sequelize.define("Habilidades", {
        descripcion: {
            type: DataTypes.STRING,
        },
        // tslint:disable-next-line:object-literal-sort-keys
        habilidades: {
            type: DataTypes.STRING,
        },
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        }
    });
    return Habilidades;
};
exports.default = habilidades;

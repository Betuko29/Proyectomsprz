"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var index_1 = __importDefault(require("./lib/index"));
var Empleado = index_1.default.define("Empleado", {
    id_empleado: {
        type: sequelize_1.default.STRING,
    },
    nombre: {
        type: sequelize_1.default.STRING,
    },
    // tslint:disable-next-line:object-literal-sort-keys
    apellido: {
        type: sequelize_1.default.STRING,
    },
    email: {
        type: sequelize_1.default.STRING,
    },
    direccion: {
        type: sequelize_1.default.STRING,
    },
    fech_nac: {
        type: sequelize_1.default.DATE,
    },
    estatus: {
        type: sequelize_1.default.BOOLEAN,
    },
});
var Huellas = index_1.default.define("Huella", {
    dedo: {
        type: sequelize_1.default.STRING,
    },
    id_empleado: {
        type: sequelize_1.default.STRING,
    },
});
var Habilidades = index_1.default.define("Habilidades", {
    descHabilidades: {
        type: sequelize_1.default.STRING,
    },
    // tslint:disable-next-line:object-literal-sort-keys
    Habilidades: {
        type: sequelize_1.default.STRING,
    },
    idHabilidades: {
        type: sequelize_1.default.INTEGER,
    },
    id_empleado: {
        type: sequelize_1.default.STRING,
    },
});
exports.default = {
    Empleado: Empleado,
    Habilidades: Habilidades,
    Huellas: Huellas,
};

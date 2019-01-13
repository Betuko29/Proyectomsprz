"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var moment_1 = __importDefault(require("moment"));
var resolvers = {
    Query: {
        hello: function () { return "hello"; },
        trabajadores: function (_, args, _a) {
            var db = _a.db;
            return __awaiter(_this, void 0, void 0, function () {
                var Empleados;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, db.models.Empleados.findAll({ raw: true })];
                        case 1:
                            Empleados = _b.sent();
                            console.log(Empleados);
                            return [2 /*return*/, Empleados];
                    }
                });
            });
        },
        login: function (_, args, _a) {
            var db = _a.db;
            return __awaiter(_this, void 0, void 0, function () {
                var Empleados;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, db.models.Empleados.findAll({ where: { email: args.email, contrasena: args.contrasena } })];
                        case 1:
                            Empleados = _b.sent();
                            return [2 /*return*/, Empleados];
                    }
                });
            });
        },
        historial: function (_, args, _a) {
            var db = _a.db;
            return __awaiter(_this, void 0, void 0, function () {
                var historial;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.debug(db.models);
                            return [4 /*yield*/, db.models.Historial.findAll({ raw: true })];
                        case 1:
                            historial = _b.sent();
                            console.log(historial);
                            return [2 /*return*/, historial];
                    }
                });
            });
        },
    },
    // tslint:disable-next-line:object-literal-sort-keys
    Mutation: {
        Formulario: function (_, args, _a) {
            var db = _a.db;
            return __awaiter(_this, void 0, void 0, function () {
                var _b, Empleados, Huellas, id, fecha_nac, dataValues, res, e_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = db.models, Empleados = _b.Empleados, Huellas = _b.Huellas;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 4, , 5]);
                            id = uuid_1.v4();
                            fecha_nac = moment_1.default(args.fech_nac).isValid() ? moment_1.default(args.fech_nac) : false;
                            console.log(fecha_nac);
                            return [4 /*yield*/, Empleados.create({
                                    uuid: id,
                                    nombre: args.nombre,
                                    apellido: args.apellido,
                                    email: args.email,
                                    direccion: args.direccion,
                                    fech_nac: fecha_nac,
                                    estatus: args.estatus,
                                    habilidades: args.habilidades,
                                    habilidades_desc: args.habilidades_desc,
                                    contrasena: args.contrasena
                                })];
                        case 2:
                            dataValues = (_c.sent()).dataValues;
                            return [4 /*yield*/, Huellas.create({
                                    uuid: id,
                                    huella: id,
                                    EmpleadoUuid: id
                                })];
                        case 3:
                            res = _c.sent();
                            console.log(res);
                            return [2 /*return*/, dataValues];
                        case 4:
                            e_1 = _c.sent();
                            throw new Error(e_1);
                        case 5: return [2 /*return*/];
                    }
                });
            });
        },
        Historial: function (_, args, _a) {
            var db = _a.db;
            return __awaiter(_this, void 0, void 0, function () {
                var Historial, dataValues, e_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            Historial = db.models.Historial;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Historial.create({
                                    uuid: args.uuid,
                                    accion: args.accion,
                                    fechAccion: args.fechAccion
                                })];
                        case 2:
                            dataValues = (_b.sent()).dataValues;
                            return [2 /*return*/, dataValues];
                        case 3:
                            e_2 = _b.sent();
                            throw new Error(e_2);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
    },
};
exports.default = resolvers;

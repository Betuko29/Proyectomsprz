import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import historial from "../models/Historial";
import { isDate } from "util";

const resolvers = {
	Query: {
		hello: () => "hello",
		trabajadores: async (_: any, args: any, { db }: { db: any }) => {
			const Empleados = await db.models.Empleados.findAll({raw : true})
			console.log(Empleados)
			return Empleados;
		},
		login: async (_: any, args: any, { db }: { db: any }) => {
			const Empleados = await db.models.Empleados.findAll({where: {email:args.email,contrasena:args.contrasena}})
			return Empleados;
		},
		historial: async (_: any, args: any, { db }: { db: any}) => {
			console.debug(db.models)
			const historial = await db.models.Historial.findAll({raw : true})
			console.log(historial)
			return historial;
		},
},
	// tslint:disable-next-line:object-literal-sort-keys
	Mutation: {
		Formulario: async (_: any, args: any, { db }: { db: any }) => {
			const { Empleados, Huellas } = db.models
			try {
				const id = uuidv4();
				const fecha_nac = moment(args.fech_nac).isValid() ? moment(args.fech_nac) : false;
				console.log(fecha_nac)
				const { dataValues } = await Empleados.create({
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
				});
				const res = await Huellas.create({
					uuid: id,
					huella: id,
					EmpleadoUuid: id
				});
				console.log(res)
				return dataValues
			} catch (e) {
				throw new Error(e)
			}
		},
		Historial: async(_: any,args: any, { db }: { db:any }) => {
			const { Historial } = db.models
			try{
				const { dataValues } = await Historial.create({
					uuid: args.uuid,
					accion: args.accion,
					fechAccion: args.fechAccion
				});
				return dataValues
			} catch (e) {
				throw new Error(e)
			}
			},
	},
};

export default resolvers;

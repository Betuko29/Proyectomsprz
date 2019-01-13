import Sequelize from "sequelize";

const db: string = process.env.BD || "Redytel";
const user: string = process.env.USER_DB  || "sa";
const pwd: string = "milka";
const host: string = process.env.HOST || "localhost";

const sequelize = new Sequelize ( db, user, pwd, {
    dialect: "mssql",
    host,
    operatorsAliases: false,
    pool: {
        acquire: 30000,
        idle: 10000,
        max: 5,
        min: 0,
   },
});

const Models: any = {
	empleado: sequelize.import("../models/empleado"),
    huellas: sequelize.import("../models/huellas"),
    historial: sequelize.import("../models/historial"),
};

Object.keys(Models).forEach( (key: any) =>{
	if('associate' in Models[key] ) {
		Models[key].associate(Models)
	}
});

Models.sequelize = sequelize;
Models.Sequelize = Sequelize;

export default Models;


const empleado = (sequelize: any, DataTypes: any) => {
	const Empleado = sequelize.define("Empleados", {
		uuid: {
			type: DataTypes.STRING,
			primaryKey: true, 
		},
		nombre: {
			type: DataTypes.STRING,
		},
		// tslint:disable-next-line:object-literal-sort-keys
		apellido: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		direccion: {
			type: DataTypes.STRING,
		},
		fech_nac: {
			type: DataTypes.DATE,
		},
		estatus: {
			type: DataTypes.BOOLEAN,
		},
		// tslint:disable-next-line:object-literal-sort-keys
		habilidades: {
			type: DataTypes.STRING,
		},
		habilidades_desc: {
			type: DataTypes.STRING,
		},
		contrasena: {
			type: DataTypes.INTEGER,
		}
	});

	Empleado.associate = (models: any) => {
		Empleado.hasMany(models.huellas)
	}

	return Empleado;
}
export default empleado;
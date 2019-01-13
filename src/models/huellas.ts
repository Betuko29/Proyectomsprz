const huellas = ( sequelize: any, DataTypes: any ) =>{
	// tslint:disable-next-line:indent
	const Huellas = sequelize.define("Huellas", {
		huella: {
			type: DataTypes.STRING,
		},
		uuid: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
	});
	
	Huellas.associate = (models: any) => {
		Huellas.belongsTo(models.empleado)
	}

	return Huellas;
}
export default huellas;
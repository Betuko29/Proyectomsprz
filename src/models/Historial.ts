const historial = (sequelize: any, DataTypes: any) => {
	const historial = sequelize.define("Historial", {
		uuid: {
			type: DataTypes.STRING,
			primaryKey: true, 
        },
        accion:{
            type: DataTypes.STRING,
        },
        fechAccion: {
            type: DataTypes.DATE,
        }
	});

	historial.associate = (models: any) => {
		historial.hasMany(models.huellas)
	}

	return historial;
}
export default historial;
/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('demo', {
		id: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		address: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING(30),
			allowNull: false
		}
	}, {
		tableName: 'demo'
	});
};

/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Items', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		qty: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		price: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'Items'
	});
};

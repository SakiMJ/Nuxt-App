const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Account = sequelize.define(
	'Account',
	{
		id: {
			autoIncrement: true,
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING(255),
			allowNull: true,
			comment: '名字',
		},
		age: {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: '年龄',
		},
		hobby: {
			type: DataTypes.STRING(255),
			allowNull: true,
			comment: '爱好',
		},
		gmt_create: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			comment: '创建时间',
		},
		gmt_modified: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			comment: '修改时间',
		},
	},
	{
		tableName: 'account',
		timestamps: false,
	}
);

(async () => {
	await Account.sync({ alter: true });
	console.log('====================================');
	console.log('创建成功');
	console.log('====================================');
})();

module.exports = Account;

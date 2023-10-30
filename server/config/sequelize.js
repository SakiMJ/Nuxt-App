const { Sequelize } = require('sequelize');

const initModels = require('../models/init-models');

const sequelize = new Sequelize('test', 'root', '00000', {
	host: '8.134.48.201',
	dialect: 'mysql',
});

const models = initModels(sequelize);

models.Student.hasOne(models.Desk, {
	foreignKey: 'student_id',
	as: 'deskDetail',
});
models.Desk.belongsTo(models.Student, {
	foreignKey: 'student_id',
	as: 'studentDetail',
});

(async function () {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

module.exports = { ...models, sequelize };

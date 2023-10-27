const { Sequelize } = require('sequelize');

const initModels = require('../models/init-models');

const sequelize = new Sequelize('test', 'root', '00000', {
	host: '8.134.48.201',
	dialect: 'mysql',
});

const models = initModels(sequelize);

(async function () {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

module.exports = { ...models, sequelize };

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', '00000', {
	host: '8.134.153.133',
	dialect: 'mysql',
});

(async function () {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

module.exports = sequelize;

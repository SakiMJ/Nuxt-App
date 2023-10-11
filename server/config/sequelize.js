import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test', 'root', '00000', {
	host: '8.134.158.197',
	dialect: 'mysql',
});

(async function test() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

const express = require('express');
const cors = require('cors');
const { Account, Desk, Student } = require('./config/sequelize.js');
const { Op } = require('sequelize');
const app = express();

app.use(cors());

app.get('/insert', async (req, res) => {
	await Account.create({ username: '小明', age: 50, hobby: '打篮球' });
	res.send('添加成功');
});
// app.get('/find', async (req, res) => {
// 	const result = await Account.findAll({
// 		where: {
// 			username: '小明',
// 		},
// 	});
// 	res.send(result);
// });-
app.get('/find', async (req, res) => {
	const result = await Account.findAll({
		where: {
			[Op.or]: [{ username: '小明' }, { age: 20 }],
		},
	});
	res.send(result);
});

app.get('/desk', async (req, res) => {
	const result = await Desk.findAll({
		include: {
			model: Student,
			as: 'studentDetail',
		},
	});
	res.send(result);
});

app.get('/student', async (req, res) => {
	const result = await Student.findAll({
		include: {
			model: Desk,
			as: 'deskDetail',
		},
	});
	res.send(result);
});

app.listen(8081, () => {
	console.log('启动了');
});

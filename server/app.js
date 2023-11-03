const express = require('express');
const cors = require('cors');
const {
	Account,
	Desk,
	Student,
	Class,
	Comment,
	Order,
	sequelize,
} = require('./config/sequelize.js');
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

app.get('/class', async (req, res) => {
	const result = await Class.findAll({
		include: {
			model: Student,
			as: 'studentList',
		},
	});
	res.send(result);
});
app.get('/student_class', async (req, res) => {
	const result = await Student.findAll({
		include: {
			model: Class,
			as: 'classDetail',
		},
	});
	res.send(result);
});

app.get('/delete', async (req, res) => {
	await Comment.destroy({
		where: {
			order_num: '333',
		},
	});
	res.send('成功');
});

app.get('/comment', async (req, res) => {
	// const t = await sequelize.transaction();
	try {
		// await Comment.create(
		// 	{ content: '第二条评论', order_num: '333' },
		// 	{ transaction: t }
		// );
		// await Order.update(
		// 	{ is_comment: 1 },
		// 	{ where: { order_num: '333' }, transaction: t }
		// );

		// await t.commit();

		await sequelize.transaction(async (t) => {
			await Comment.create(
				{ content: '第二条评论', order_num: '222' },
				{ transaction: t }
			);
			await Order.update(
				{ is_comment: 1 },
				{ where: { order_num: '222' }, transaction: t }
			);
		});
		res.send('成功');
	} catch (error) {
		t.rollback();
		res.send('失败');
	}
});

app.listen(8081, () => {
	console.log('启动了');
});

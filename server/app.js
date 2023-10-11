import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

app.get('/test', (req, res) => {});

app.listen(8081, () => {
	console.log('启动了');
});

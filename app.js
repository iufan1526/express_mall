//const express = require('express')
import express from 'express';
import productRouter from './router/products.router.js';
import connect from './schemas/index.js';

const app = express();
const port = 3000;
connect();

app.use(express.json());
app.use(productRouter);

app.listen(port, () => {
    console.log(`서버 구동이 정상적으로 완료되었습니다. 포트 : ${port}`);
});

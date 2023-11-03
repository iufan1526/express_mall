//const express = require('express')
import express from 'express';
import {count, add} from './router/produects.router.js';
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`서버 구동이 정상적으로 완료되었습니다. 포트 : ${port}`)
})
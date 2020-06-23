'use strict';

import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const app = express();
const Console = console;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (req, res) => res.status(200).json({code: 200, message: 'Hello world'}));

app.listen(process.env.PORT, () => {
	Console.log('The system is run on port', process.env.PORT);
});

export default app;
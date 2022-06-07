import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';

import routes from './routes';

import './database/connect';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('running to port 3333'));
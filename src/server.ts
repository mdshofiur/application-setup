import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { mysqlUsersRouter } from './mysql/modules/routes/mysql.routes';
import { mongodbUserRouter } from './mongodb/modules/routes/mongodb.routes';
import connectDB from './mongodb/mongodb-config';

const app: Express = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
   res.send('Hello World!');
});

// app.use(mysqlUsersRouter);
app.use(mongodbUserRouter);

app.listen(PORT, () => {
   console.log(`Listening on http://localhost:${PORT}`);
   connectDB();
});

export default app;

import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app: Express = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
   res.send('Hello World!');
});

app.listen(PORT, () => { 
   console.log(`Listening on http://localhost:${PORT}`);
});

export default app;

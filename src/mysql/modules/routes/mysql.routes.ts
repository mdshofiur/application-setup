import express from 'express';
import { createUser, getUsers } from '../controller/mysql.controller';

export const mysqlUsersRouter = express.Router();

mysqlUsersRouter.post('/mysql/users', createUser);
mysqlUsersRouter.get('/mysql/users', getUsers);

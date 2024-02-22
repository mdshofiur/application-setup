import express from 'express';
import { createUser, getUsers } from '../controller/mysql.controller';

export const mysqlRouterUsers = express.Router();

mysqlRouterUsers.post('/users', createUser);
mysqlRouterUsers.get('/users', getUsers);

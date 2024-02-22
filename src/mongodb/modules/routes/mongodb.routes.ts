import express from 'express';
import userController from '../controllers/mongodb.controller';

export const mongodbUserRouter = express.Router();

mongodbUserRouter.post('/mongodb/users', userController.mongodbCreateUser);

mongodbUserRouter.get('/mongodb/users', userController.mongodbGetUsers);

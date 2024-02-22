import { Request, Response } from 'express';
import { userService } from '../services/mongodb.service';

async function mongodbCreateUser(req: Request, res: Response): Promise<void> {
   try {
      const { name, email, password } = req.body;
      const user = await userService.createUser(name, email, password);
      res.status(201).json({ user });
   } catch (error: any) {
      res.status(500).json({ error: error.message });
   }
}

async function mongodbGetUsers(req: Request, res: Response): Promise<void> {
   try {
      const users = await userService.getUsers();
      res.status(200).json({ users });
   } catch (error: any) {
      res.status(500).json({ error: error.message });
   }
}

const userController = {
   mongodbCreateUser,
   mongodbGetUsers,
};

export default userController;

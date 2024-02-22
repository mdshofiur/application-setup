import { Request, Response } from 'express';
import { executeQuery } from '../../mysql-execute';
import { queries } from '../../mysql-query';

export async function createUser(req: Request, res: Response): Promise<void> {
   const { name, email, password } = req.body;
   try {
      const results = await executeQuery(queries.create, [
         name,
         email,
         password,
      ]);
      res.status(201).json({ message: 'User created', results: results });
   } catch (error: any) {
      res.status(500).json({ error: error.message });
   }
}

export async function getUsers(req: Request, res: Response): Promise<void> {
   try {
      const results = await executeQuery(queries.all);
      res.status(200).json(results);
   } catch (error: any) {
      res.status(500).json({ error: error.message });
   }
}

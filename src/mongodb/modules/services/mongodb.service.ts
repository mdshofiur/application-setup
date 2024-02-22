import { UserModel } from "../models/mongodb.model";

 async function createUser(
   name: string,
   email: string,
   password: string,
): Promise<any> {
   try {
      const user = await UserModel.create({ name, email, password });
      return user;
   } catch (error:any) {
      throw new Error(`Error creating user: ${error.message}`);
   }
}

 async function getUsers(): Promise<any> {
   try {
      const users = await UserModel.find();
      return users;
   } catch (error:any) {
      throw new Error(`Error getting users: ${error.message}`);
   }
}


export const userService = {
   createUser,
   getUsers,
};
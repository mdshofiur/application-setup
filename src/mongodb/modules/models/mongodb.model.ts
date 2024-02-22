import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
   name: string;
   email: string;
   password: string;
}

const UserSchema: Schema = new Schema({
   name: { type: String, required: true, unique: true },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
});

const UserModel = mongoose.model<User>('User', UserSchema);

export { User, UserModel };

import * as mongoose from 'mongoose';
import { BasicRoles, Schemas } from 'src/app.const';

export const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  phone: {
    type: String,
    required: false,
    unique: true,
  },
  address: String,
  stores: [
    {
      type: mongoose.Types.ObjectId,
      //   ref: Schemas.NailStores
    },
  ],
  role: {
    type: String,
    default: BasicRoles.NormalUser,
  },
});

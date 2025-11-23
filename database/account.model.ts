import { model, models, Schema, Types } from "mongoose";


export interface IAccount {
  _id: Types.ObjectId;
  userId: Types.ObjectId
  name: string;
  password?: string;
  image?: string;
  authMethod: 'github' | 'google' | 'credentials';
  providerAccountId: string;
}

const AccountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,

  },
  name: {type: String, required: true},
  image: { type: String },
  password: {type: String},
  authMethod: {type: String, required: true, enum:["github", 'google', 'credentials']},
  providerAccountId: { type: String, required: true },
  {timestamps: true}
})

const Account = models?.Account || model<IAccount>("Account", AccountSchema)

export default Account


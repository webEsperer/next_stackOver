import { Document, model, models, Schema, Types, } from "mongoose";

export interface ICollection {
  authorId: Types.ObjectId;
  questionId: Types.ObjectId;
}

export interface ICollectionDoc extends ICollection, Document {}

const CollectionSchema = new Schema<ICollection>(
  {
    authorId: { type: Schema.Types.ObjectId, ref: "User", rewuired: true },
    questionId: {type: Schema.Types.ObjectId, ref: 'Question', required: true}
  },
  { timestamps: true }
);

const Collection = models?.Collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;

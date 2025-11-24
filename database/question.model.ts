import { Document, model, models, Schema, Types } from "mongoose";

export interface IQuestion {
  authorId: Types.ObjectId;
  title: string;
  content: string;
  answers?: string;
  tags?: string[];
  upvotes?: number;
  downvotes?: number;
  views?: number;
}

export interface IQuestionDoc extends IQuestion, Document {}

const QuestionSchema = new Schema<IQuestion>(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    answers: { type: Number, default: 0 },
    tags: { type: [Schema.Types.ObjectId], ref: "Tag" },
    upvotes: { type: Number , default: 0},
    downvotes: { type: Number , default: 0},
    views: {type: Number, default: 0}
  },
  { timestamps: true }
);

const Question = models?.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;

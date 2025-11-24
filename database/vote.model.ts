import { Document, model, models, Schema, Types } from "mongoose";

export interface IVote {
  authorId: Types.ObjectId;
  id: Types.ObjectId;
  type: 'answer' | 'question',
  voteType: 'upvote' | 'downvote',
}

export interface IVoteDoc extends IVote, Document {}

const VoteSchema = new Schema<IVote>(
  {
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    id: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, enum: ['answer', 'question'], required: true },
    voteType: {type: String, enum: ['upvote', 'downvote'], required: true}
  },
  { timestamps: true }
);

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;

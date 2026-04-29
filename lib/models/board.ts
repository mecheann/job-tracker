import mongoose, { Schema, Document } from "mongoose";

export interface IBoard extends Document {
  name: string;
  userId: string;
  //     description?: string;
  columns: mongoose.Types.ObjectId[];
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}

export const BoardSchema = new Schema<IBoard>(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true, index: true },
    //     description?: string;
    columns: [{ type: Schema.Types.ObjectId, ref: "Column" }],
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Board || mongoose.model<IBoard>("Board", BoardSchema);

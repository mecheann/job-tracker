import mongoose, { Schema, Document } from "mongoose";

export interface IColumn extends Document {
  name: string;
  boardId: mongoose.Types.ObjectId;
  order: number;
  jobApplications: mongoose.Types.ObjectId[];
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}

export const ColumnSchema = new Schema<IColumn>(
  {
    name: { type: String, required: true },
    boardId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Board",
      index: true,
    },
    order: { type: Number, required: true, default: 0 },
    jobApplications: [{ type: Schema.Types.ObjectId, ref: "JobApplication" }],
    createdBy: { type: String, default: "system" },
    updatedBy: { type: String, default: "system" },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Column ||
  mongoose.model<IColumn>("Column", ColumnSchema);

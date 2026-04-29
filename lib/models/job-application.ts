import mongoose, { Schema, Document } from "mongoose";

export interface IJobApplication extends Document {
  company: string;
  position: string;
  location?: string;
  status: string;
  columnId: mongoose.Types.ObjectId;
  boardId: mongoose.Types.ObjectId;
  userId: string;
  order: number;
  notes?: string;
  salary?: number;
  jobUrl?: string;
  appliedDate?: Date;
  tags?: string[];
  description?: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}

export const JobApplicationSchema = new Schema<IJobApplication>(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String },
    status: { type: String, required: true, default: "Applied" },
    columnId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Column",
      index: true,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Board",
      index: true,
    },
    userId: { type: String, required: true },
    order: { type: Number, required: true, default: 0 },
    notes: { type: String },
    salary: { type: Number },
    jobUrl: { type: String },
    appliedDate: { type: Date },
    tags: [{ type: String }],
    description: { type: String },
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.JobApplication ||
  mongoose.model<IJobApplication>("JobApplication", JobApplicationSchema);

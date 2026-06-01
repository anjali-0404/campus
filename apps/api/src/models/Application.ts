import mongoose, { Schema, Document } from 'mongoose';

export interface IApplication extends Document {
  student: mongoose.Types.ObjectId;
  job: mongoose.Types.ObjectId;
  resume_url: string;
  cover_letter?: string;
  status: 'applied' | 'shortlisted' | 'rejected' | 'accepted';
  applied_at: Date;
  updatedAt: Date;
}

const ApplicationSchema: Schema = new Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true
    },
    resume_url: { type: String, required: true },
    cover_letter: { type: String },
    status: {
      type: String,
      enum: ['applied', 'shortlisted', 'rejected', 'accepted'],
      default: 'applied'
    },
    applied_at: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model<IApplication>('Application', ApplicationSchema);

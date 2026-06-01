import mongoose, { Schema, Document } from 'mongoose';

export interface IJob extends Document {
  title: string;
  description: string;
  company: mongoose.Types.ObjectId;
  salary_min: number;
  salary_max: number;
  location: string;
  job_type: 'Full-time' | 'Internship' | 'Part-time';
  qualifications: string[];
  skills_required: string[];
  deadline: Date;
  status: 'open' | 'closed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Company', 
      required: true 
    },
    salary_min: { type: Number, required: true },
    salary_max: { type: Number, required: true },
    location: { type: String, required: true },
    job_type: {
      type: String,
      enum: ['Full-time', 'Internship', 'Part-time'],
      required: true
    },
    qualifications: [{ type: String }],
    skills_required: [{ type: String }],
    deadline: { type: Date, required: true },
    status: {
      type: String,
      enum: ['open', 'closed', 'cancelled'],
      default: 'open'
    }
  },
  { timestamps: true }
);

export default mongoose.model<IJob>('Job', JobSchema);

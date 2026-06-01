import mongoose, { Schema, Document } from 'mongoose';

export interface IInterview extends Document {
  application: mongoose.Types.ObjectId;
  interview_round: number;
  interview_type: 'Technical' | 'HR' | 'Group Discussion' | 'Final';
  scheduled_date: Date;
  scheduled_time: string;
  location: string;
  interviewer: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  result?: 'pass' | 'fail' | 'pending';
  feedback?: string;
  createdAt: Date;
  updatedAt: Date;
}

const InterviewSchema: Schema = new Schema(
  {
    application: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true
    },
    interview_round: { type: Number, required: true },
    interview_type: {
      type: String,
      enum: ['Technical', 'HR', 'Group Discussion', 'Final'],
      required: true
    },
    scheduled_date: { type: Date, required: true },
    scheduled_time: { type: String, required: true },
    location: { type: String, required: true },
    interviewer: { type: String, required: true },
    status: {
      type: String,
      enum: ['scheduled', 'completed', 'cancelled'],
      default: 'scheduled'
    },
    result: {
      type: String,
      enum: ['pass', 'fail', 'pending']
    },
    feedback: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model<IInterview>('Interview', InterviewSchema);

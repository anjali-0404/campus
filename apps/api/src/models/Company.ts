import mongoose, { Schema, Document } from 'mongoose';

export interface ICompany extends Document {
  name: string;
  logo?: string;
  website?: string;
  description: string;
  industry: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

const CompanySchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    logo: { type: String },
    website: { type: String },
    description: { type: String, required: true },
    industry: { type: String, required: true },
    location: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<ICompany>('Company', CompanySchema);

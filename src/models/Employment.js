import { Schema, model } from 'mongoose';

const employmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  aboutCompany: {
    type: String,
    required: true,
  },
  numberOfEmployees: {
    type: Number,
    required: true,
  }
},{
  timestamps: true
});

export default model('Employment', employmentSchema);

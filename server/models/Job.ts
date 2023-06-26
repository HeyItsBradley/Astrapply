import { Schema, model } from "mongoose";

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  applyDate: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => new Date(timeStamp).toDateString(),
  },
  applyMethod: {
    type: String,
    required: true,
    trim: true,
  },
  contact: {
    type: String,
    trim: true,
  },
  materials: [
    {
      resume: {
        type: String,
        trim: true,
      },
      coverLetter: {
        type: String,
        trim: true,
      },
      portfolio: {
        type: String,
        trim: true,
      },
    },
  ],
  status: {
    type: String,
    default: "Waiting...",
  },
  notes: {
    type: String,
    trim: true,
  },
});

const Job = model("Job", jobSchema);

export { Job };

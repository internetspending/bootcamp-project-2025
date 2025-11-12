// src/database/projectSchema.ts
import mongoose, { Schema, InferSchemaType, models } from "mongoose";

const projectSchema = new Schema(
  {
    title:       { type: String, required: true },
    slug:        { type: String, required: true, unique: true, index: true },
    date:        { type: Date,   required: false, default: Date.now },
    description: { type: String, required: true },
    tech:        { type: [String], default: [] },
    github:      { type: String, required: false },
    demo:        { type: String, required: false },
    image:       { type: String, required: false },
    image_alt:   { type: String, required: false },
    content:     { type: String, required: true },
  },
  { collection: "projects", timestamps: false }
);

const Project = models.projects || mongoose.model("projects", projectSchema);
export type ProjectDoc = InferSchemaType<typeof projectSchema>;
export default Project;


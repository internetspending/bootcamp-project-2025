// src/database/blogSchema.ts
import mongoose, { Schema, InferSchemaType, models } from "mongoose";

const commentSchema = new Schema(
  {
    author: { type: String, required: false },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const blogSchema = new Schema(
  {
    title:      { type: String, required: true },
    slug:       { type: String, required: true, unique: true, index: true },
    date:       { type: Date,   required: false, default: Date.now },
    description:{ type: String, required: true },
    image:      { type: String, required: true },
    image_alt:  { type: String, required: true },
    content:    { type: String, required: true },
    comments:   { type: [commentSchema], default: [] },
  },
  { collection: "blogs", timestamps: false }
);

// Prevent model recompilation in dev
const Blog = models.blogs || mongoose.model("blogs", blogSchema);

export type BlogDoc = InferSchemaType<typeof blogSchema>;
export default Blog;


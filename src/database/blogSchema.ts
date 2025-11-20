// src/database/blogSchema.ts
import mongoose, { Schema, InferSchemaType, models } from "mongoose";

// TypeScript type for comment
export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

const CommentSchema = new Schema(
  {
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true, default: Date.now },
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
    comments:   { type: [CommentSchema], default: [] },
  },
  { collection: "blogs", timestamps: false }
);

// Prevent model recompilation in dev
const Blog = models.blogs || mongoose.model("blogs", blogSchema);

export type BlogDoc = InferSchemaType<typeof blogSchema>;
export default Blog;


// src/app/api/blogs/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ date: -1 }).lean();
    return NextResponse.json(blogs, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to fetch blogs" }, { status: 500 });
  }
}


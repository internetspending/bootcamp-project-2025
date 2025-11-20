// src/app/api/blogs/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, { params }: IParams) {
  const { slug } = await params;
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug }).lean();
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error fetching blog" }, { status: 500 });
  }
}


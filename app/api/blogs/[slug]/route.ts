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

export async function POST(req: NextRequest, { params }: IParams) {
  const { slug } = await params;
  try {
    const body = await req.json();
    const { user, comment } = body;

    if (!user || !comment) {
      return NextResponse.json(
        { message: "User and comment are required" },
        { status: 400 }
      );
    }

    await connectDB();
    const blog = await Blog.findOne({ slug });
    
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    blog.comments.push({
      user: user.trim(),
      comment: comment.trim(),
      time: new Date(),
    });

    await blog.save();

    return NextResponse.json(
      { message: "Comment added successfully", blog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { message: "Error adding comment" },
      { status: 500 }
    );
  }
}


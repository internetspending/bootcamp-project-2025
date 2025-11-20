// scripts/addSampleComments.ts
import "dotenv/config";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function main() {
  await connectDB();

  const blog = await Blog.findOne(); // or use a specific slug filter

  if (!blog) {
    console.log("No blog found to update");
    return;
  }

  blog.comments = blog.comments || [];

  blog.comments.push({
    user: "Test User",
    comment: "This is a sample comment for Milestone 3B.",
    time: new Date(),
  });

  await blog.save();

  console.log("Sample comment added to blog with id:", blog._id);
}

main()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


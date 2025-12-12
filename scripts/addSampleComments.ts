// scripts/addSampleComments.ts
import "dotenv/config";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function main() {
  await connectDB();

  const slugs = [
    "debugging-my-brain-binary-search",
    "from-ice-cream-to-income"
  ];

  for (const slug of slugs) {
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      console.log(`No blog found with slug: ${slug}`);
      continue;
    }

    // Only add comments if the blog doesn't already have comments
    if (!blog.comments || blog.comments.length === 0) {
      blog.comments = [];

      // Add 2-3 sample comments per blog
      blog.comments.push({
        user: "Alex Chen",
        comment: "Great insights! I've been applying binary search thinking to my daily workflow too. It's amazing how algorithmic thinking can improve productivity.",
        time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      });

      blog.comments.push({
        user: "Sarah Johnson",
        comment: "This really resonates with me. The O(log n) mindset is a game-changer for problem-solving. Thanks for sharing!",
        time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      });

      if (slug === "from-ice-cream-to-income") {
        blog.comments.push({
          user: "Mike Rodriguez",
          comment: "Love the connection between Amazon FBA and coding. Consistency really is key in everything we do!",
          time: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
        });
      }

      await blog.save();
      console.log(`✓ Added ${blog.comments.length} sample comments to blog: ${slug}`);
    } else {
      console.log(`Blog ${slug} already has ${blog.comments.length} comments, skipping...`);
    }
  }
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


/**
 * Defines a Blog type with properties for blog posts.
 *
 * @property {string} title - The title of the blog post
 * @property {string} date - The publication date of the blog post
 * @property {string} description - A short description of the blog post
 * @property {string} image - Path to the blog's image
 * @property {string} imageAlt - Alt text for the blog's image
 * @property {string} slug - URL-friendly identifier for the blog post
 */
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

/**
 * Array of blog posts.
 * Each blog must conform to the Blog type structure.
 */
const blogs: Blog[] = [
  {
    title: "Debugging My Brain: How Binary Search Changed How I Think",
    date: "October 14, 2025",
    description:
      "I used to brute-force everything—both in code and in life. Learning binary search taught me to eliminate half of the noise every time. Now, when I study or make business decisions, I think in O(log n).",
    image: "./images/binary-search.svg",
    imageAlt: "Binary search visual diagram",
    slug: "debugging-my-brain-binary-search",
  },
  {
    title: "From Ice Cream to Income: What Selling on Amazon Taught Me",
    date: "October 15, 2025",
    description:
      "Two years scooping ice cream and a year flipping products on Amazon gave me the same lesson: consistency wins. Whether it's managing ROI spreadsheets or debugging TypeScript, success comes from iteration, not perfection.",
    image: "./images/amazon-fba.svg",
    imageAlt: "Boxes ready for shipment in a warehouse",
    slug: "from-ice-cream-to-income",
  },
];

/**
 * Dynamically appends blog posts to the webpage using DOM manipulation.
 * This function creates HTML elements for each blog and appends them to the blog container.
 */
function appendBlogsToPage(): void {
  // Get the blog container element
  const blogContainer = document.getElementById("blog-container");

  // If container doesn't exist, log error and exit
  if (!blogContainer) {
    console.error("Blog container not found!");
    return;
  }

  // Clear any existing content
  blogContainer.innerHTML = "";

  // Iterate through each blog and create HTML elements
  blogs.forEach((blog) => {
    // Create the main article container
    const article = document.createElement("article");
    article.className = "blog-card";

    // Create and append the blog meta section (date)
    const meta = document.createElement("div");
    meta.className = "blog-meta";

    const dateSpan = document.createElement("span");
    dateSpan.className = "blog-date";
    dateSpan.textContent = blog.date;
    meta.appendChild(dateSpan);

    article.appendChild(meta);

    // Create and append the blog title
    const title = document.createElement("h2");
    title.className = "blog-title";
    title.textContent = blog.title;
    article.appendChild(title);

    // Create and append the blog description
    const description = document.createElement("p");
    description.className = "blog-excerpt";
    description.textContent = blog.description;
    article.appendChild(description);

    // Create and append the "Read More" link
    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`;
    link.className = "read-more";
    link.textContent = "Read More →";
    article.appendChild(link);

    // Append the complete article to the blog container
    blogContainer.appendChild(article);
  });
}

// Run the function when the page loads
appendBlogsToPage();

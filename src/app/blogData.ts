export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Debugging My Brain: How Binary Search Changed How I Think",
    date: "October 14, 2025",
    description:
      "I used to brute-force everything—both in code and in life. Learning binary search taught me to eliminate half of the noise every time. Now, when I study or make business decisions, I think in O(log n).",
    image: "/images/binary-search.svg",
    imageAlt: "Binary search visual diagram",
    slug: "debugging-my-brain-binary-search",
  },
  {
    title: "From Ice Cream to Income: What Selling on Amazon Taught Me",
    date: "October 15, 2025",
    description:
      "Two years scooping ice cream and a year flipping products on Amazon gave me the same lesson: consistency wins. Whether it's managing ROI spreadsheets or debugging TypeScript, success comes from iteration, not perfection.",
    image: "/images/amazon-fba.svg",
    imageAlt: "Boxes ready for shipment in a warehouse",
    slug: "from-ice-cream-to-income",
  },
];

export default blogs;

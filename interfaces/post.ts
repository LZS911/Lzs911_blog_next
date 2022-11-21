import type Author from "./author";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  star: boolean;
  category: "blog" | "project";
  theme: string;
  tag: string[];
};

export default PostType;

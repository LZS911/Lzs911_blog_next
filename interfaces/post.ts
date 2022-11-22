import Theme from "../@types/theme";
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
  theme: Theme;
  tag: string[];
};

export default PostType;

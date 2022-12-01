import Link from "next/link";
import PostType, { Items } from "../interfaces/post";
import EmptyBox from "./empty-box";

type Props = {
  posts: Items[];
  type: "BLOGS" | "PROJECTS" | "TALKS";
};

const HeroPost: React.FC<Props> = ({ posts, type }) => {
  return (
    <article className="max-w-3xl">
      <div className="flex justify-center font-[Arial]">
        <h1 className="text-5xl font-bold bg-indigo px-5 py-2 rounded-sm text-shadow-lg  leading-[1.1]">
          {type}
        </h1>
      </div>

      <section>
        {posts.map((v) => {
          return (
            <div key={v.title} className="mt-20 p-10 text-center">
              <h2 className="font-[Arial] text-shadow-de text-2xl tracking-wider font-bold text-black">
                <Link
                  as={`/posts/${v.slug}`}
                  href="/posts/[slug]"
                  className="hover:underline"
                >
                  {v.title}
                </Link>
              </h2>
              <hr className=" border-b-indigo border-b-[1px] my-6" />
              <span className="text-black opacity-70">
                {v.excerpt || "excerpt"} {" | "}
                <Link
                  as={`/posts/${v.slug}`}
                  href="/posts/[slug]"
                  className="hover:underline text-center hover:bg-indigo"
                >
                  Link
                </Link>
                {" | "}
                {v.date}
              </span>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default HeroPost;

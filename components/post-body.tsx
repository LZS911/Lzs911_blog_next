import cn from "classnames";
import Head from "next/head";
import { Items } from "../interfaces/post";
import { WEB_TITLE } from "../lib/constants";
import EmptyBox from "./empty-box";
import PostHeader from "./post-header";

type Props = Items & { showHeader?: boolean };

const PostBody: React.FC<Props> = ({
  content,
  title,
  theme = "fancy",
  date,
  coverImage,
  author,
  showHeader = false,
}) => {
  return (
    <article
      className={cn({
        [`markdown-body-${theme}`]: theme,
      })}
    >
      <Head>
        <title>{`${title ?? "Home"} | ${WEB_TITLE}`}</title>
      </Head>

      <EmptyBox if={showHeader}>
        <PostHeader
          title={title}
          coverImage={coverImage}
          date={date}
          author={author}
        />
      </EmptyBox>

      <div className="max-w-3xl">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  );
};

export default PostBody;

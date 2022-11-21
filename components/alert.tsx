import Container from "./container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert: React.FC<Props> = ({ preview }) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            The source code for this blog is{" "}
            <a
              href={`https://github.com/LZS911/Lzs911_blog_next`}
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              available on GitHub
            </a>
            .
          </>
        </div>
      </Container>
    </div>
  );
};

export default Alert;

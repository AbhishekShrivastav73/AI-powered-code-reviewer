
import Markdown from "react-markdown";
import CodeBlock from "./CodeBlock";

const Markdowns = ({ content }) => {
  return (
    <Markdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <CodeBlock language={match[1]} value={String(children).trim()} />
          ) : (
            <code className="bg-gray-800 text-white p-1 rounded">{children}</code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default Markdowns;

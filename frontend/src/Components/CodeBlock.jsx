import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language || "javascript"} style={dracula}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

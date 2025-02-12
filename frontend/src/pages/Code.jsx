import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Import the Prism CSS theme
// Load additional language support if needed
import "prismjs/components/prism-jsx"; // Example for JavaScript
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";

function Code() {
  const [code, setCode] = useState(`
 // Sample code
function fetchData() {
         let data = fetch('/api/data').then(response => response.json());
     }`);

  const [review, setreview] = useState("");
  const ReviewCode = async () => {
    try {
      let response = await axios.post(`http://localhost:3000/ai/get-response`, {
        code,
      });
      console.log(response.data);
      setreview(response.data);
    } catch (error) {
      console.error("Failed to get response:", error);
    }
  };
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="w-full flex bg-zinc-950 items-center gap-2 min-h-screen">
      <div className="left w-1/2 h-screen relative">
        <div className="code w-full bg-zinc-900 h-full p-3">
          <Editor
            value={code}
            onValueChange={(value) => setCode(value)}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            padding={10}
            className="w-full h-full text-zinc-100"
            style={{ fontFamily: "Fira Code, monospace" }}
          />
        </div>
        <button
          onClick={ReviewCode}
          className="bg-zinc-50 absolute bottom-3 right-2 text-zinc-950 px-6 py-2 font-semibold rounded-xl"
        >
          Review
        </button>
      </div>
      <div className="w-1/2 h-screen overflow-x-scroll overflow-y-auto text-white p-4 text-sm bg-zinc-800">
        <Markdown className="prose" rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </div>
  );
}

export default Code;

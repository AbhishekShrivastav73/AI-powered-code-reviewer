import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Loading from "../Components/Loading";
import Markdowns from "../Components/Markdown";
import BackendLoader from "../Components/BackendLoader";

function CodeAI() {
  const [code, setCode] = useState(``);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [display, setDisplay] = useState(false);
  const [isBackendReady, setIsBackendReady] = useState(false);

  const responseAreaRef = useRef(null);
  const handleSubmit = async () => {
    if (responseAreaRef.current) {
      responseAreaRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setLoading(true);
    setDisplay(true);
    try {
      let res = await axios.post(
        `https://ai-powered-code-reviewer-i325.onrender.com/ai/get-response`,
        {
          code,
        }
      );
      // console.log(res.data);
      setResponse(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to get response:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading && response) {
      responseAreaRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const startWebsite = async () => {
      try {
        let response = await axios.get(
          `https://ai-powered-code-reviewer-i325.onrender.com/`
        );
        console.log(response.data);
        if (response.data.status === "ok") {
          setIsBackendReady(true);
        }
      } catch (error) {
        console.error("Failed to get response:", error);
        setIsBackendReady(false);
        setTimeout(() => {
          startWebsite();
        }, 3000);
      }
    };

    startWebsite();
  }, [loading, response]);

  return isBackendReady ? (
    <>
      <Navbar />
      <div className="w-full min-h-screen text-zinc-50 bg-[#0D1117]">
        <div className="top w-full flex flex-col justify-center h-[87vh] items-center">
          <h1 className="text-3xl md:text-5xl text-[#8B949E] text-center font-bold tracking-tighter">
            Your{" "}
            <b className="relative  text-[#0095ff]">
              {" "}
              AI - Code{" "}
              <img
                src="https://imgs.search.brave.com/hS8LtKrYPRqMPAn-zpkObgZkPKXoiofr5aNza0_siNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYWR2ZXJ0aXNp/bmctbWVkaWEtMS82/NC9BZHZlcnRpc2lu/Z19fTWVkaWFfSWNv/bnMtMTAtMTI4LnBu/Zw"
                className="w-12 absolute -top-10 -right-32 rounded-xl md:hidden"
                alt=""
              />
            </b>{" "}
            <b className="text-[#E6EDF3] relative">
              Reviewer{" "}
              <img
                src="https://imgs.search.brave.com/hS8LtKrYPRqMPAn-zpkObgZkPKXoiofr5aNza0_siNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYWR2ZXJ0aXNp/bmctbWVkaWEtMS82/NC9BZHZlcnRpc2lu/Z19fTWVkaWFfSWNv/bnMtMTAtMTI4LnBu/Zw"
                className="w-12 absolute -top-6 -right-6 hidden md:block rounded-xl"
                alt=""
              />
            </b>
            .
          </h1>
          <div>
            <h2 className="text-5xl  flex flex-wrap items-center justify-center md:text-7xl mt-1 mb-2 text-[#8B949E] text-center font-black tracking-tighter">
              <span className="text-[#E6EDF3]">SMART</span>,
              <span className="text-[#0095ff]">FAST</span>,
              <span className="text-[#E6EDF3]">RELIABLE</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-center px-5 text-[#8B949E] mt-2 tracking-tight">
            This AI-powered code reviewer helps you review your code for{" "}
            <br className="hidden md:block" /> syntax errors, logical errors,
            and security vulnerabilities.
          </p>

          <div className="bg-[#161B22] w-[85%] md:w-[70%] rounded-xl mt-12 relative p-2">
            <button
              onClick={handleSubmit}
              className="bg-[#0095ff] px-4 cursor-pointer py-2 rounded-lg absolute bottom-3 right-2"
            >
              <i className="ri-arrow-up-line"></i>
            </button>
            <textarea
              className="text-white outline-none px-4 py-2 rounded-xl w-full resize-none"
              name="code"
              value={code}
              placeholder="Enter your code here.."
              style={{
                height: "60px",
                maxHeight: "200px",
                overflowY: "scroll",
              }}
              onChange={(e) => {
                setCode(e.target.value);
                // console.log(e.target.value);
                e.target.style.height = "inherit";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
          </div>

          <p className="text-sm text-center text-[#8B949E] mt-4">
            Powered by Gemini <i className="ri-gemini-fill"></i>
          </p>
        </div>

        <div
          ref={responseAreaRef}
          id="responseArea"
          className={`${display ? "block" : "hidden"} w-full`}
        >
          <div className="w-full md:w-[80%] min-h-screen mx-auto">
            {loading ? (
              <Loading />
            ) : (
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl text-[#8B949E] text-center font-bold">
                  AI-Code Review
                </h2>
                <div className="bg-[#161B22] rounded-xl p-4">
                  <Markdowns content={response} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <BackendLoader />
  );
}

export default CodeAI;

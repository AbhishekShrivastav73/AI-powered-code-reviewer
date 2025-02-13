import Navbar from "../Components/Navbar";

function CodeAI() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen text-zinc-50 bg-[#0D1117]">
        <div className="top w-full flex flex-col justify-center h-[80vh] items-center">
          <h1 className="text-5xl text-[#8B949E] text-center font-bold tracking-tighter">
            Your{" "}
            <b className="relative  text-[#0095ff]">
              {" "}
              AI - Code {" "}
              <img
                src="https://imgs.search.brave.com/hS8LtKrYPRqMPAn-zpkObgZkPKXoiofr5aNza0_siNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYWR2ZXJ0aXNp/bmctbWVkaWEtMS82/NC9BZHZlcnRpc2lu/Z19fTWVkaWFfSWNv/bnMtMTAtMTI4LnBu/Zw"
                className="w-12 absolute -top-4 -right-6 rounded-xl md:hidden"
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
            <h2 className="text-6xl mt-3 mb-2 text-[#8B949E] text-center font-black tracking-tighter">
              <span className="text-[#E6EDF3]">SMART</span>,
              <span className="text-[#0095ff]">FAST</span>,
              <span className="text-[#E6EDF3]">RELIABLE</span>
            </h2>
          </div>
          <p className="text-sm text-center text-[#8B949E] mt-2 tracking-tight">
            This AI-powered code reviewer helps you review your code for <br />{" "}
            syntax errors, logical errors, and security vulnerabilities.
          </p>

          <div className="bg-[#161B22] w-[70%] rounded-2xl mt-12 relative p-2">
            <button className="bg-[#0095ff] tracking-tight font-bold text-[#E6EDF3] px-4 py-2 rounded-lg hover:bg-[#1F6FEB] absolute bottom-3 right-2">
              Review Code
            </button>

            <textarea
              className="text-white outline-none px-4 py-2 rounded-xl w-full resize-none"
              name="code"
              placeholder="Enter your code here.."
              style={{
                height: "60px",
                maxHeight: "200px",
                overflowY: "scroll",
              }}
              onChange={(e) => {
                e.target.style.height = "inherit";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeAI;

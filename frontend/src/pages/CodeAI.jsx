import Navbar from "../Components/Navbar";

function CodeAI() {
  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen text-zinc-50 bg-[#0D1117]">
      <div className="top w-full flex flex-col justify-center h-[80vh] items-center">
        <h1 className="text-7xl text-[#8B949E] text-center font-bold tracking-tighter">
          Enter Your <b className="relative text-[#E6EDF3]"> <img src="https://imgs.search.brave.com/hS8LtKrYPRqMPAn-zpkObgZkPKXoiofr5aNza0_siNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYWR2ZXJ0aXNp/bmctbWVkaWEtMS82/NC9BZHZlcnRpc2lu/Z19fTWVkaWFfSWNv/bnMtMTAtMTI4LnBu/Zw" className="w-12 absolute -top-4 -right-6 rounded-xl" alt="" /> Code</b> <br /> For <b className="text-[#E6EDF3]">Review</b>.
        </h1>
        <p className="text-sm text-center text-[#8B949E] mt-2 tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam
          nostrum eligendi explicabo, <br /> maiores dicta cupiditate ea
          veritatis. Ut dolorem quae quo optio.
        </p>
        <div className="bg-[#161B22] w-[70%] rounded-full mt-12 relative p-2">
          <button className="bg-[#0095ff] tracking-tight font-bold text-[#E6EDF3] px-4 py-2 rounded-full hover:bg-[#1F6FEB] absolute top-2 right-2">Review Code</button>

          <input
            className="text-white outline-none px-4 py-2 rounded-full w-full "
            name="code"
            placeholder="Enter your code here.."
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default CodeAI;

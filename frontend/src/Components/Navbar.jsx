import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-zinc-950 h-16 flex px-6 py-2 items-center justify-between">
      <div className="text-[#E6EDF3] tracking-tight font-bold text-md">
        AI-Powered Code Reviewer
      </div>
      <div className="flex items-center gap-4">
        <Link to={'/'} className="text-[#E6EDF3] mr-2 tracking-tighter font-semibold">Home</Link>
        <Link className="bg-[#0095ff] hidden md:block text-[#E6EDF3]  px-6 py-2 rounded-full font-bold ">
          <span className="mr-2">GitHub</span>
          <i className="text-lg text-black" class="ri-github-fill"></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

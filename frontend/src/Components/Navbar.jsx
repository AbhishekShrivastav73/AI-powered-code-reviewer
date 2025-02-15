import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-[#0D1117] h-16 flex px-6 py-2 items-center justify-between">
      <Link to={'/'} className="text-[#E6EDF3] tracking-tight font-bold text-md">
        AI-Powered Code Reviewer
      </Link>
      <div className="flex items-center gap-4">
        
        <Link to={'https://github.com/AbhishekShrivastav73'} className="bg-[#0095ff]  text-[#E6EDF3]  px-6 py-1 rounded-full font-bold ">
          <span className="mr-2">GitHub</span>
          <i className="text-lg text-white ri-github-fill"></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import Link from "next/link";

export function Header() {
  return (
    <div className="flex w-full items-center justify-between py-10">
      <div className="flex px-2 gap-2 bg-white w-44 h-8 rounded-full border-gray-700 shadow-inner items-center">
        <div className="bg-dark-green-500 w-2.5 h-2.5 rounded-full animate-pulse" />
        <span className="font-extrabold text-black text-[11px]">
          Open for new projects
        </span>
      </div>

      <header className="flex bg-black-800 w-137.5 h-15.5 py-2.5 px-8 rounded-full border border-gray-700 shadow-inner shadow-gray-700">
        <nav className="flex w-full gap-5 items-center justify-evenly">
          <Link
            href="/"
            className="flex flex-1 h-full justify-center items-center hover:bg-gray-700/50 rounded-full transition-colors duration-150"
          >
            <p className="font-bold text-white text-base">Home</p>
          </Link>

          <Link
            href="/"
            className="flex flex-1 h-full justify-center items-center hover:bg-gray-700/50 rounded-full transition-colors duration-150"
          >
            <p className="font-bold text-white text-base">Projects</p>
          </Link>

          <Link
            href="/"
            className="flex flex-1 h-full justify-center items-center hover:bg-gray-700/50 rounded-full transition-colors duration-150"
          >
            <p className="font-bold text-white text-base">Skills</p>
          </Link>

          <Link
            href="/"
            className="flex flex-1 h-full justify-center items-center hover:bg-gray-700/50 rounded-full transition-colors duration-150"
          >
            <p className="font-bold text-white text-base">About</p>
          </Link>
        </nav>
      </header>

      <button className="flex px-2 h-15.5 w-40 bg-white text-black-800 shadow-inner items-center justify-center rounded-full cursor-pointer hover:bg-black hover:text-white border border-gray-700 transition-colors duration-200">
        <p className="underline font-bold text-base">GET IN TOUCH</p>
      </button>
    </div>
  );
}

import Link from "next/link";

interface IMastheadProps{
    path: string;
}

export default function Masthead({path}: IMastheadProps) {
  
  function getBackground(pathTab: string){
    return path === pathTab ? 'bg-gray-700' : '';
  }

  return (
    <div className="fixed z-10 w-full backdrop-blur">
      <div className="flex justify-center p-3">
        <div className="flex gap-7">
          <Link
            href="/"
            className={`hover:underline cursor-pointer p-2 ${getBackground('/')}`}
          >
            About Me
          </Link>
          <Link
            href="/works"
            className={`hover:underline cursor-pointer p-2 ${getBackground('/works')}`}
          >
            Works
          </Link>
        </div>
      </div>
    </div>
  );
}

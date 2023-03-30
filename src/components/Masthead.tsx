import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IMastheadProps {
  path: string;
}

export default function Masthead({ path }: IMastheadProps) {
  const [gitImg, setGitImg] = useState<string | null>();

  function getBackground(pathTab: string) {
    return path === pathTab ? "bg-gray-700" : "";
  }

  useEffect(() => {
    fetch("https://api.github.com/users/ViniciusAndr")
      .then((res) => res.json())
      .then((data) => setGitImg(data.avatar_url));
  }, []);

  return (
    <div className="fixed z-10 w-full backdrop-blur">
      <div className="flex justify-center max-w-[25rem] ml-auto mr-auto">
        <div className="flex justify-between p-3 w-full px-0">
          <Image
            src={gitImg ?? ""}
            width={40}
            height={40}
            alt={"Github account image"}
            className="rounded-full cursor-pointer"
            title="Go to Github page"
            onClick={() =>
              window.open("https://github.com/ViniciusAndr", "_blank")}
          />
          <div className="flex gap-7">
            <Link
              href="/"
              className={`hover:underline cursor-pointer p-2 ${
                getBackground("/")
              }`}
            >
              About Me
            </Link>
            <Link
              href="/works"
              className={`hover:underline cursor-pointer p-2 ${
                getBackground("/works")
              }`}
            >
              Works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

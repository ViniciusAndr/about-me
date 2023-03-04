import Link from "next/link";

export default function Masthead() {
  return (
    <div className="fixed w-full">
      <div className="flex justify-center p-3">
        <div className="flex gap-7">
          <Link href="/" className="hover:underline cursor-pointer">
            About Me
          </Link>
          <Link href="/works" className="hover:underline cursor-pointer">
            Works
          </Link>
        </div>
      </div>
    </div>
  );
}

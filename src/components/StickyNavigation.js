import { Link } from "react-router-dom";

export default function StickyNav() {
  return (
    <header className="fixed bottom-6 left-1 w-screen flex justify-center">
      <nav className=" py-3 px-0">
        <Link className="bg-gray-100 px-6 py-3 m-2 shadow-lg rounded-xl border border-black" to="#home">Home</Link>
        <Link className="bg-gray-100 px-6 py-3 m-2 shadow-lg rounded-xl border border-black" to="#projects">Projects</Link>
        <Link className="bg-gray-100 px-6 py-3 m-2 shadow-lg rounded-xl border border-black" to="#about">About</Link>
      </nav>
    </header>
  );
}
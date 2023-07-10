import { Link } from "react-router-dom";

export default function StickyNav() {
  return (
    <header className="site-header">
      <nav className="sticky-nav">
        <Link to="#home">Home</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#about">About</Link>
      </nav>
    </header>
  );
}
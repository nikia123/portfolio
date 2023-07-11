import { HashLink as Link } from "react-router-hash-link";

export default function StickyNav() {
  return (
    <div className="fixed flex justify-center bottom-4 left-0 right-0">
      <header 
        className="nav-mobile lg:nav-desktop">

        <nav className=" py-3 px-0">
          <Link 
            className="nav-links"
            smooth to="/#home">Home
          </Link>

          <Link 
            className="nav-links" 
            smooth to="/#projects">Projects
          </Link>

          <Link 
            className="nav-links"
            smooth to="/#about">About
          </Link>
        </nav>
      </header>
    </div>

  );
}
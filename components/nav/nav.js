import React, { useState } from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import ReactLogo from "../react-logo/react-logo";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <>
      <header className="page-header">
        <div className="logo">
          <ReactLogo />
          <p>Workshop</p>
        </div>
        <div className="menu" onClick={() => { setMenuVisibility(!menuVisibility) }}>
          <div className="menu-icon-wrapper">
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
          </div>
        </div>
      </header>
      <div
        className={`fullscreen-menu-wrapper ${menuVisibility === false ? "hidden" : null}`}
        onClick={() => { setMenuVisibility(!menuVisibility) }}>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            Home
          </Link>
          <Link
            className={slug === "page-projects" ? "selected" : null}
            href="/page-projects"
          >
            Projects
          </Link>
          <Link
            className={slug === "page-cursus" ? "selected" : null}
            href="/page-cursus"
          >
            Cursus
          </Link>
          <Link
            className={slug === "page-contact" ? "selected" : null}
            href="/page-contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
});

export default Nav;

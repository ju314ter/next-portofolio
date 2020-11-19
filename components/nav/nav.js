import React, { useState } from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import ReactLogo from "../react-logo/react-logo";
import "./nav.scss";


const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;
  const [menuVisibility, setMenuVisibility] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.x)
    console.log(currPos.y)
  })


  function fn(isEnter) {
    requestAnimationFrame(() => {
      // execute in same frame
      requestAnimationFrame(() => {
        // execute in next frame
        document.querySelector('.menu-icon-wrapper').className = isEnter ? "menu-icon-wrapper in" : "menu-icon-wrapper out";
      });
    });
  }

  return (
    <>
      <header className="page-header">
        <div className="logo">
          <ReactLogo />
          <p style={slug === "page-projects" || slug === "page-contact" ? { color: 'white' } : null}>Workshop</p>
        </div>
        <div className="menu" onClick={() => {
          setMenuVisibility(!menuVisibility);
          document.querySelectorAll("a").forEach((el, i) => {
            el.classList.add("slidein");
            el.style.animationDelay = (i + 1) * 200 + 'ms';
          });
        }}>
          <div className="menu-icon-wrapper"
            onMouseEnter={() => { fn(true) }}
            onMouseLeave={() => { fn(false) }}>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
          </div>
        </div>
      </header>
      <div
        className={`fullscreen-menu-wrapper ${menuVisibility === false ? "hidden" : null}`}
        onClick={() => {
          setMenuVisibility(!menuVisibility);
          document.querySelectorAll("a").forEach((el) => el.classList.remove("slidein"));
        }}>
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

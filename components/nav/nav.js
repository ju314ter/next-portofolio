import React, { useState, useEffect } from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import ReactLogo from "../react-logo/react-logo";

import { useSpring, animated } from "react-spring";

import "./nav.scss";


const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [{ y, z, color }, set] = useSpring(() => ({ y: 0, z: 0, color: '#fff' }))

  useEffect(() => {
    if (fullpage.navigation.slug === 'page-cursus') {
      set({ color: '#000' })
    } else {
      set({ color: '#fff' })
    }
    return () => {

    }
  }, [fullpage])

  return (
    <>
      <header className="page-header">
        <div className="logo">
          <ReactLogo />
          <animated.p style={{ color: color }} className="logo-titre">Workshop</animated.p>
        </div>
        <div className="menu" onClick={() => {
          setMenuVisibility(!menuVisibility);
          document.querySelectorAll("a").forEach((el, i) => {
            el.classList.add("slidein");
            el.style.animationDelay = (i + 1) * 200 + 'ms';
          });
        }}>
          <div className="menu-icon-wrapper"
            onMouseEnter={() => { set({ y: 8, z: 100 }) }}
            onMouseLeave={() => { set({ y: 0, z: 0 }) }}
          >
            <animated.div className="menu-icon-line" style={{ background: color, transform: z.interpolate([0, 25, 50, 100], [0, 30, 0, 0]).interpolate(v => `rotateZ(-${v}deg)`), bottom: y.interpolate(v => `${v}px`) }}></animated.div>
            <animated.div className="menu-icon-line" style={{ background: color }}></animated.div>
            <animated.div className="menu-icon-line" style={{ background: color, transform: z.interpolate([0, 25, 50, 100], [0, 30, 0, 0]).interpolate(v => `rotateZ(${v}deg)`), bottom: y.interpolate(v => `-${v}px`) }}></animated.div>
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

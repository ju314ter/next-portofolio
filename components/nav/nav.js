import React, { useState, useEffect, useCallback } from "react";
import navigation, {
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
  const [springTitreProps, setSpringTitre] = useSpring(()=>({ x: 0, height: 80, opacity: 1}))
  
  useEffect(() => {
    switch (fullpage.navigation.slug) {
      case '': set({ color: '#fff'});
      break;
      case 'projects': set({ color: '#fff'});
      break;
      case 'cursus': set({ color: '#000'});
      break;
      case 'contact': set({ color: '#fff'});
      break;
    }

    return () => {

    }
  }, [fullpage.navigation.slug])

  return (
    <>
      <header className="page-header">
        <div className="logo" onClick={()=>{}}>
          <Link href='/'><ReactLogo /></Link>
          <div style={{overflow:"hidden"}}>
            <animated.p style={{ color: color }} className='logo-titre animated-text-entry'>{fullpage.navigation.slug}</animated.p>
          </div>
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
            className={slug === "projects" ? "selected" : null}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={slug === "cursus" ? "selected" : null}
            href="/cursus"
          >
            Cursus
          </Link>
          <Link
            className={slug === "contact" ? "selected" : null}
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
});

export default Nav;

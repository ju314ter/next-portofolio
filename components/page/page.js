import React, { useEffect, useRef } from 'react';
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import './page.css';
import { useRouter } from 'next/router'

const Page = withNavigationContext(({ style, children, fullpage }) => {

  const pageRef = useRef(null)
  let logoTitle = {};

  const scrollListener = () => {
    pageRef.current.scrollTop <= 15 ? logoTitle[0].classList.remove("hide") : logoTitle[0].classList.add("hide")
  }

  useEffect(() => {
    logoTitle = document.getElementsByClassName('logo-titre');
    pageRef.current.addEventListener("scroll", scrollListener);

    return () => {
      pageRef.current.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return <div className="page" ref={pageRef} style={style}>{children}</div>;
});

export default Page;

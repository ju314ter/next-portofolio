import React, { useEffect, useRef } from 'react';
import './page.css';

const Page = ({ style, children }) => {

  const pageRef = useRef(null)
  let logoTitle = {};

  const scrollListener = () => {
    if (pageRef.current.scrollTop <= 15) {
      logoTitle[0].classList.remove("hide");
    } else (
      logoTitle[0].classList.add("hide")
    )
  }

  useEffect(() => {
    logoTitle = document.getElementsByClassName('logo-titre');
    pageRef.current.addEventListener("scroll", scrollListener);

    return () => {
      pageRef.current.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return <div className="page" ref={pageRef} style={style}>{children}</div>;
};

export default Page;

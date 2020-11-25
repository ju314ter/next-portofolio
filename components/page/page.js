import React, { useEffect, useRef } from 'react';
import './page.css';

const Page = ({ style, children }) => {

  const pageRef = useRef(null)

  const scrollListener = () => {
    // console.log(pageRef.current.scrollTop)
  }

  useEffect(() => {
    pageRef.current.addEventListener("scroll", scrollListener);

    return () => {
      pageRef.current.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return <div className="page" ref={pageRef} style={style}>{children}</div>;
};

export default Page;

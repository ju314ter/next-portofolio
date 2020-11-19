import React, { useEffect } from 'react';
import './page.css';

const Page = ({ children }) => {

  useEffect(() => {
    const scrollX = document.getElementsByClassName('page')
    const scrollElement = scrollX[0];
    console.log(scrollX.length)
    console.log(scrollX)
    scrollElement.addEventListener("scroll", function () {
      console.log(scrollX[0].scrollTop)
    });

    return () => {
      scrollElement.removeEventListener("scroll", () => { console.log('listener removed') })
    }
  }, [])


  return <div className="page">{children}</div>;
};

export default Page;

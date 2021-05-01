import React, { useState, useEffect } from "react";
import Head from "next/head";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Experience from "../../components/experience/experience";
import { animated as a, useSpring } from "react-spring";
import useMeasure from 'react-use-measure'

import './cursus.scss'
import cursusData from '../../data/cursus.json'

export const CursusPage = withNavigationContext(({ fullpage }) => {
    const initialColor = 'rgb(79, 129, 232)';
    const [ref, bounds] = useMeasure()
    const [scrollY, setScrollY] = useState(0);
    const [style, set] = useSpring(() => ({ x: 0 }))


    const handleScroll = (scrollHeight) => {
        setScrollY(Math.floor(scrollHeight));
    }

    useEffect(() => {
        isFinite(scrollY / bounds.height) ? set({ x: scrollY  / (bounds.height - 300) }) : null;
      }, [scrollY, bounds]);
    
    return (
        <a.div style={{background: style.x.interpolate(
            [0, 1],
            ["rgb(11, 26, 58)", "rgb(79, 129, 232)"]
          )}}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="How did I get there ?"/>
                <title>Julien F&#233;ger Workshop - Cursus</title>
                <meta name="robots" content="index,follow" />
            </Head>
            <Page getScrollHeight={handleScroll}>
                <div className="cursus-wrapper" ref={ref}>
                    {Object.entries(cursusData.formations).reverse().map((experience, i) => {
                        return <Experience experience={experience[1]} key={i} isEven={i % 2} />
                    })}
                </div>
            </Page>
            <div className="clouds noselect">
                <img src="/cloud1.png" alt="cloud" className="cloud noselect"></img>
                <img src="/cloud2.png" alt="cloud" className="cloud noselect"></img>
                <img src="/cloud3.png" alt="cloud" className="cloud noselect"></img>
                <img src="/cloud4.png" alt="cloud" className="cloud noselect"></img>
                <img src="/cloud5.png" alt="cloud" className="cloud noselect"></img>
            </div>
        </a.div>
    )
});

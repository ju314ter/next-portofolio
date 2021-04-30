import React, { useState, useEffect } from "react";
import Head from "next/head";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Experience from "../../components/experience/experience";
import { animated as a, useSpring } from "react-spring";

import './cursus.scss'
import cursusData from '../../data/cursus.json'

export const CursusPage = withNavigationContext(({ fullpage }) => {

    const handleHeight = (height) => {
    }

    return (
        <a.div style={{background: 'rgb(79, 129, 232)'}}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="How did I get there ?"/>
                <title>Julien F&#233;ger Workshop - Cursus</title>
                <meta name="robots" content="index,follow" />
            </Head>
            <Page getHeight={handleHeight}>
                <div className="cursus-wrapper">
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

import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Experience from "../../components/experience/experience";

import './cursus.scss'

import cursusData from '../../data/cursus.json'



export const CursusPage = withNavigationContext(({ fullpage }) => {
    return (
        <>
            <Page>
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
        </>
    )
});

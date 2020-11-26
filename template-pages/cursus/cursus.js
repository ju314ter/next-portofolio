import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Particles from 'react-particles-js';

import './cursus.scss'


export const CursusPage = withNavigationContext(({ fullpage }) => {
    return (
        <Page>
            <div className="cursus-wrapper">
                <p>This is cursus page</p>
            </div>
            <div className="clouds noselect">
                <img src="/cloud1.png" alt="cloud" className="cloud noselect"></img>
                <img src="/cloud2.png" alt="cloud" className="cloud noselect"></img>
                <img src="/cloud3.png" alt="cloud" className="cloud noselect"></img>
                <img src="/cloud4.png" alt="cloud" className="cloud noselect"></img>
                <img src="/cloud5.png" alt="cloud" className="cloud noselect"></img>
            </div>
        </Page>
    )
});

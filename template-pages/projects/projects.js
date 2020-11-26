import React, { useState, useEffect } from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Particles from 'react-particles-js';
import Project from '../../components/project/project';


import './projects.scss'
import projectsData from '../../data/realisations.json'

export const ProjectsPage = withNavigationContext(({ fullpage }) => {

    const [projects, setProjects] = useState(projectsData.realisations)

    return (
        <Page>
            {/* <Particles
                className="canvas-wrapper-cursus"
                width="100%"
                height="100%"
                params={} /> */}
            <div className="projects-wrapper">
                {Object.entries(projects).map((project, i) => {
                    return <Project project={project[1]} key={i} />
                })}
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

import React, { useState } from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Particles from 'react-particles-js';
import Project from '../../components/project/project';

import './projects.scss'

export const ProjectsPage = withNavigationContext(({ fullpage }) => {

    const tab = [1, 2, 3, 4]
    const obj = { 1: 1, 2: 2, 3: 3, 4: 4 }

    const [projects, setProjects] = useState({
        project1: {
            imgPath: "",
            title: "",
            desc: "",
            tags: ["", ""]
        },
        project2: {
            imgPath: "",
            title: "",
            desc: "",
            tags: ["", ""]
        },
        project3: {
            imgPath: "",
            title: "",
            desc: "",
            tags: ["", ""]
        },
        project4: {
            imgPath: "",
            title: "",
            desc: "",
            tags: ["", ""]
        },
        project5: {
            imgPath: "",
            title: "",
            desc: "",
            tags: ["", ""]
        }
    })

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
        </Page>
    )
});

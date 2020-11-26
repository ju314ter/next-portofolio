import React, { useEffect, useState } from 'react'
import './project.scss'
import useMeasure from 'react-use-measure';
import { useSpring, animated } from "react-spring";


const Project = (projectData, key) => {
    const { project } = projectData

    const [open, toggle] = useState(false)
    const [bind, bounds] = useMeasure()
    const props = useSpring({ top: open ? 0 : bounds.height })

    useEffect(() => {
        console.log(bounds)
    })

    return (
        <div className="project-container">
            <div className="img-wrapper" style={{ background: `url('${project.illustrationPath}') no-repeat center`, backgroundSize: project.portrait ? 'contain' : 'cover' }}>
            </div>
            <div className="desc-wrapper" {...bind} >
                <h2 className="titre">{project.projectName}</h2>
                <span className="description">{project.description}</span>
                <animated.div className="tags-wrapper" style={{ top: props.top }}>
                    {project.tags.map((tag, i) => {
                        return <animated.div className="tag" key={tag + i} style={{ opacity: props.top.interpolate([0, bounds.height], [0, 1]) }}>{tag}</animated.div>
                    })}
                </animated.div>
            </div>
        </div>
    );
};

export default Project;

import React, { useEffect, useState, useRef } from 'react'
import './project.scss'
import useMeasure from 'react-use-measure';
import { useSpring, animated } from "react-spring";


const Project = (projectData) => {
    const { project } = projectData

    const projectDescDivRef = useRef(null);

    const [open, toggle] = useState(false)
    const [descDivHeight, setDescDivHeight] = useState(0);

    const props = useSpring({ top: open ? 0 : descDivHeight })

    useEffect(() => {
        setDescDivHeight(projectDescDivRef.current.clientHeight)
    }, [])

    return (
        <div className="project-container"
            onMouseEnter={() => { toggle(true) }}
            onMouseLeave={() => { toggle(false) }}>
            <div className="img-wrapper" style={{ background: `url('${project.illustrationPath}') no-repeat center`, backgroundSize: project.portrait ? 'contain' : 'cover' }}>
            </div>
            <div className="desc-wrapper" ref={projectDescDivRef}>
                <h2 className="titre">{project.projectName}</h2>
                <span className="description">{project.description}</span>
                <animated.div className="tags-wrapper" style={{ top: props.top }}>
                    {project.tags.map((tag, i) => {
                        return <animated.div className="tag" key={tag + i} style={{ opacity: props.top.interpolate([descDivHeight, 0], [0, 1]) }}>{tag}</animated.div>
                    })}
                </animated.div>
            </div>
        </div>
    );
};

export default Project;

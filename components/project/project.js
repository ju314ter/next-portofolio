import React, { useEffect, useState, useRef, useCallback } from 'react'
import './project.scss'
import useMeasure from 'react-use-measure';
import { useSpring, useTransition, animated } from "react-spring";


const Project = ({ project, onClick }) => {

    if (!project) { return null; }

    const [open, toggle] = useState(false)
    const [ref, bounds] = useMeasure()
    const props = useSpring({ top: open ? 0 : bounds.height })
    

    if(project.tags && project.description && project.projectName) {
        return (
            <div className="project-container"
                onClick={()=>(onClick(project))}
                onMouseEnter={() => { toggle(true) }}
                onMouseLeave={() => { toggle(false) }}>
                <div className="simple-trans-main">
                    <div className="img-wrapper"><img src={project.illustrationPath[0]} style={{ height: '100%' }} /></div>
                </div>
                <div className="desc-wrapper" ref={ref}>
                    <h2 className="titre">{project.projectName}</h2>
                    <span className="description">{project.description}</span>
                    <animated.div className="tags-wrapper" style={{ top: props.top }}>
                        {project.tags.map((tag, i) => {
                            return <animated.div className="tag" key={tag + i} style={{ opacity: props.top.interpolate([bounds.height, 0], [0, 1]) }}>{tag}</animated.div>
                        })}
                    </animated.div>
                </div>
            </div>
        );
    } else { return null}
};

export default Project;

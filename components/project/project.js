import React, { useEffect, useState, useRef, useCallback } from 'react'
import './project.scss'
import useMeasure from 'react-use-measure';
import { useSpring, useTransition, animated } from "react-spring";


const Project = (projectData) => {

    const { project } = projectData

    const getIllustrationsNodes = () => {

        let pagesArray = [];

        for (var i = 0, len = project.illustrationPath.length; i < len; i++) {
            pagesArray.push(project.illustrationPath[i].toString())
        }
        return pagesArray

    }
    const [illustrationsNodes, setIllustrationsNodes] = useState(getIllustrationsNodes())

    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % illustrationsNodes.length), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    const [open, toggle] = useState(false)
    const [ref, bounds] = useMeasure()
    const props = useSpring({ top: open ? 0 : bounds.height })
    
    return (
        <div className="project-container"
            onMouseEnter={() => { toggle(true) }}
            onMouseLeave={() => { toggle(false) }}>
            <div className="simple-trans-main" onClick={onClick}>
                {illustrationsNodes.length > 1 ? transitions.map(({ item, props, key }) => {
                    return <animated.div key={key} className="img-wrapper" style={props}><div className="img-wrapper" style={{ cursor: 'pointer' }}><img src={illustrationsNodes[item]} style={{ height: '100%' }} /></div></animated.div>
                }) : <animated.div className="img-wrapper"><img src={illustrationsNodes[0]} style={{ height: '100%' }} /></animated.div>}
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
};

export default Project;

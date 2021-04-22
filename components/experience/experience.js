import React, { useEffect, useState } from "react";
import useMeasure from 'react-use-measure';
import { useSpring, animated } from "react-spring";
import "./experience.scss";


const Experience = (props) => {
    const { experience, isEven } = props

    const [open, toggle] = useState(false)
    const [ref, bounds] = useMeasure()
    const springProp = useSpring({ top: open ? 0 : bounds.height, borderRadius: open ? '0%' : '50%' })

    return (
        <div
            ref={ref}
            onClick={() => { toggle(!open) }}
            className={`experience-wrapper ${isEven ? 'even' : ''}`}
        >
            <div className="type-experience-wrapper">
                {experience.typeExperience && experience.typeExperience.map((typeExperience) => {
                    return <span className="type-experience">{typeExperience}</span>
                })}
            </div>
            <div className="header-card">
                <h2>{experience.intitule}</h2>
                <em>{experience.soustitre}</em>
            </div>
            <div className="description">
                <span>{experience.description}</span>
            </div>
            <div className="date">
                <span>{experience.date}</span>
            </div>

            <animated.div style={springProp} className="sliding-panel">
                <ul>
                    {experience.acquis.map((acquis, i) => {
                        return <li key={i} className="acquis-element">{acquis}</li>
                    })}
                </ul>
            </animated.div>
        </div>
    );
};

export default Experience;

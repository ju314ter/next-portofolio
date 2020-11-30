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
            <div className="type-experience">
                <p>{experience.typeExperience}</p>
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
                <h3>Acquis :</h3>
                {experience.acquis.map((acquis, i) => {
                    return <div key={i} className="acquis-element">{acquis}</div>
                })}
            </animated.div>
        </div>
    );
};

export default Experience;

import React, { useState, useCallback, useEffect } from "react";
import { useTransition, animated } from "react-spring";


const ProjectDetailPage = ({project}) => {
    const getIllustrationsNodes = () => {

        let pagesArray = [];
        if(project.illustrationPath) {
            for (var i = 0, len = project.illustrationPath.length; i < len; i++) {
                pagesArray.push(project.illustrationPath[i].toString())
            }
        }
        return pagesArray

    }
    const [illustrationsNodes, setIllustrationsNodes] = useState([...getIllustrationsNodes()])
    const [index, set] = useState(0)
    const onImageClick = useCallback((e) => {
        e.stopPropagation();
        set(state => (state + 1) % illustrationsNodes.length)
    }, [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    useEffect(()=>{
        console.log('illustration array : ', illustrationsNodes)
    }, [illustrationsNodes])

        return (
            <>
                <div className="clickable">
                    <div className="chevron-bottom-wrapper">
                        <div className="chevron-left"></div>
                        <div className="chevron-right"></div>
                    </div>
                </div>
                <div className="detail-page-content">
                    <div className="carousel-detail-project" onClick={onImageClick}>
                            {illustrationsNodes.length > 1 ? transitions.map(({ item, props, key }) => {
                                return <animated.div key={key} className="img-wrapper" style={props}><div className="img-wrapper" style={{ cursor: 'pointer' }}><img src={illustrationsNodes[item]} style={{ height: '100%' }} /></div></animated.div>
                            }) : <animated.div className="img-wrapper"><img src={illustrationsNodes[0]} style={{ height: '100%' }} /></animated.div>}
                    </div>
                </div>
            </>
        )
}

export default ProjectDetailPage
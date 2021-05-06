import React, { useState, useCallback, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import Github from '../../public/socialicons/github.svg';
import { useRouter } from 'next/router'



const ProjectDetailPage = ({project, onClose}) => {

    const router = useRouter();
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
    const [isFirstImageLoop, setIsFirstImageLoop] = useState(true)
    const [index, set] = useState(0)

    const onImageClick = useCallback((e) => {
        e.stopPropagation();
        isFirstImageLoop === false ? onClose():
        set(state => (state + 1) % illustrationsNodes.length)
    }, [isFirstImageLoop])

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    useEffect(()=>{
    //    console.log(project.repoPath)
    }, [project])

    useEffect(()=>{
        illustrationsNodes.length - 1 === index ? setIsFirstImageLoop(false):null
    },[index])

        return (
            <>
                <div className="clickable">
                    {project.repoPath && <div className="github-button">
                        <a href={project.repoPath}><Github/></a>
                    </div>}
                    <div className="chevron-bottom-wrapper">
                        <div className="chevron-left"></div>
                        <div className="chevron-right"></div>
                    </div>
                    {project.directUrl && <div className="live-button" onClick={()=>{router.push(project.directUrl)}}>
                        <span>Live</span>
                    </div>}
                </div>
                <div className="detail-page-content">
                    <div className='nav-bullets'>
                        {illustrationsNodes.length > 1 && illustrationsNodes.map((el, i)=>(
                        <span onClick={(e) => { e.stopPropagation(); return set(i)}} className={index === i ? 'nav-bullet selected': 'nav-bullet'}/>
                        ))}
                    </div>
                    <div className="carousel-detail-project" onClick={(e)=>(onImageClick(e))}>
                            {illustrationsNodes.length > 1 ? transitions.map(({ item, props, key }) => {
                                return <animated.div key={key} className="img-wrapper" style={{...props,cursor: 'pointer'}}><img src={illustrationsNodes[item]}/></animated.div>
                            }) : <animated.div className="img-wrapper"><img src={illustrationsNodes[0]} /></animated.div>}
                    </div>
                </div>
            </>
        )
}

export default ProjectDetailPage
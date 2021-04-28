import React, { useState, useEffect } from "react";
import Head from "next/head";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import { useRouter } from "next/router";
import Page from "../../components/page/page";
import Particles from 'react-particles-js';
import ProjectGrid from '../../components/project-grid/projectGrid'
import ProjectDetailPage from './project-detail'
import BackgroundFront, { indexOf } from '../../public/bg-front-cursus.svg';

import './projects.scss'
import projectsData from '../../data/realisations.json'
import useMeasure from 'react-use-measure';
import { animated, useSpring } from "react-spring";


export const ProjectsPage = withNavigationContext(({ fullpage }) => {

    const [projects, setProjects] = useState(projectsData.realisations)
    const [ref, bounds] = useMeasure();

    const router = useRouter()

    // useEffect(() => {
    //   // Always do navigations after the first render
    //   router.push('projects/?projectId=10', undefined, { shallow: true })
    // }, [])

    const [selectedProject, setSelectedProject] = useState(null)

    const displaySelectedProject = async (project) => {
        await router.push(`projects?projectId=${project.projectSlug}`, undefined, { shallow: true })
        await setDetailPageAnim({opacity:1,bottom:'0'})
        await setProjectGridAnim({opacity:0})
    }
    const closeProjectDetail = async () => {
        await router.push('projects', undefined, { shallow: true })
        await setDetailPageAnim({opacity:0,bottom:'-100vh'})
        await setProjectGridAnim({opacity:1})
    }
  
    useEffect(() => {
      const { projectId } = router.query 
      projectId ? (setSelectedProject(...projects.filter((el)=>(el.projectSlug === projectId)))
                  ,setDetailPageAnim({opacity:1,bottom:'0'})
                  ,setProjectGridAnim({opacity:0}))
                  :setSelectedProject(null)
    }, [router.query.projectId])

    const [styleDetailPage, setDetailPageAnim] = useSpring(()=>({opacity: 0, bottom :'-100vh' }))
    const [styleProjectGrid, setProjectGridAnim] = useSpring(()=>({opacity: 1}))

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Explore my projects"/>
                <title>Julien F&#233;ger Workshop - Projects</title>
                <meta name="robots" content="index,follow" />
            </Head>
            <Particles
                className="canvas-wrapper-projects"
                width="100%"
                height="100%"
                params={{
                    "particles": {
                        "number": {
                            "value": 150,
                            "density": {
                                "enable": true,
                                "value_area": 794.59250432078807
                            }
                        },
                        "color": {
                            "value": "#bebefc"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 3
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 1,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 4,
                                "size_min": 0.3,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 0.5,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 600
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 97.38283627510657,
                                "size": 16.230472712517763,
                                "duration": 3.083789815378375,
                                "opacity": 0,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }} />
            <Page className="projects-page">
                <div ref={ref} style={{width: '100%', height: '100%'}}>
                    {
                        selectedProject && (
                            <animated.div style={styleDetailPage} className={`detail-page-wrapper ${selectedProject.projectSlug}`} onClick={closeProjectDetail}>
                                <ProjectDetailPage project={selectedProject}/>
                            </animated.div>
                        )
                    }
                    <animated.div style={styleProjectGrid} className="projects-wrapper">
                        <ProjectGrid containerBounds={bounds} selectedProject={displaySelectedProject}/>
                    </animated.div>
                </div>
            </Page>
            <BackgroundFront className='bg-front-projects' />
        </>
    )
});

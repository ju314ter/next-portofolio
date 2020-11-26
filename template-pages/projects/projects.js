import React, { useState, useEffect } from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Particles from 'react-particles-js';
import Project from '../../components/project/project';

import BackgroundFront from '../../public/bg-front-cursus.svg';

import './projects.scss'
import projectsData from '../../data/realisations.json'

export const ProjectsPage = withNavigationContext(({ fullpage }) => {

    const [projects, setProjects] = useState(projectsData.realisations)

    return (
        <Page>
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
                                "enable": true,
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
            <div className="projects-wrapper">
                {Object.entries(projects).map((project, i) => {
                    return <Project project={project[1]} key={i} />
                })}
            </div>
            <BackgroundFront className='bg-front' />
        </Page>
    )
});

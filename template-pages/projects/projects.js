import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Particles from 'react-particles-js';

import './projects.scss'

export const ProjectsPage = withNavigationContext(({ fullpage }) => {
    return (
        <Page>
            <Particles
                className="canvas-wrapper-projects"
                width="100%"
                height="100%"
                params={{
                    "particles": {
                        "number": {
                            "value": 6,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#1b1e34"
                        },
                        "shape": {
                            "type": "polygon",
                            "stroke": {
                                "width": 0,
                                "color": "#000"
                            },
                            "polygon": {
                                "nb_sides": 6
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 120,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 10,
                                "size_min": 40,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 200,
                            "color": "#ffffff",
                            "opacity": 1,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 4.313480069132608,
                            "direction": "top-right",
                            "random": false,
                            "straight": true,
                            "out_mode": "out",
                            "bounce": true,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
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
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
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
                <p>This is project page</p>
            </div>
        </Page>
    )
});

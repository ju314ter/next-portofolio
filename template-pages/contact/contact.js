import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Particles from 'react-particles-js';

import Stackoverflow from '../../public/socialicons/stackoverflow.svg';
import Linkedin from '../../public/socialicons/linkedin.svg';
import Github from '../../public/socialicons/github.svg';

import './contact.scss'

export const ContactPage = withNavigationContext(({ fullpage }) => {
    return (
        <Page className="contact-page">
            <Particles
                className="canvas-wrapper-cursus"
                width="100%"
                height="100%"
                params={{
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": true,
                                "value_area": 1100.6025061692789
                            }
                        },
                        "color": {
                            "value": "#1b1e34"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 1,
                                "color": "#fff"
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
                            "value": 0.6810242604877742,
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
                            "enable": true,
                            "distance": 157.83700172831522,
                            "color": "#ffffff",
                            "opacity": 0.15783700172831522,
                            "width": 0.6313480069132609
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "top-right",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 1104.8590120982064,
                                "rotateY": 710.2665077774184
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
                                "enable": true,
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
                                "distance": 167.83216783216784,
                                "size": 15.984015984015986,
                                "duration": 1.5184815184815184,
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
            <div className="contact-wrapper">
                <span style={{ fontSize: 25, fontFamily: 'Encode Sans', color: '#fafafa', margin: 25, textAlign: 'center' }}>Let's get to know each other !</span>
                <div className="icons">
                    <div className="icon-wrapper">
                        <a href="https://github.com/ju314ter"><Github /></a>
                    </div>
                    <div className="icon-wrapper">
                    <a href="https://stackoverflow.com/users/10574010/julien-feger"><Stackoverflow /></a>
                    </div>
                    <div className="icon-wrapper">
                    <a href="https://www.linkedin.com/in/julien-feger-12364685"><Linkedin /></a>
                    </div>
                </div>
            </div>
        </Page>
    )
});

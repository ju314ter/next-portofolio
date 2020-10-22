import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Particles from 'react-particles-js';

import './home.scss'

import Angular from '../../public/angular.svg';
import Git from '../../public/git.svg';
import Gitlab from '../../public/gitlab.svg';
import Jira from '../../public/jira.svg';
import Mongo from '../../public/mongodb.svg';
import Node from '../../public/nodejs.svg';
import ReactLogo from '../../public/react.svg';
import Typescript from '../../public/typescript.svg';

export const HomePage = withNavigationContext(({ fullpage }) => {
    return (
        <Page>
            <Particles
                className="canvas-wrapper-home"
                width="100%"
                height="100%"
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": {
                            "value": "#1b1e34"
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
            <div className="home-wrapper">
                <div className="title">
                    <h1>Julien FEGER</h1>
                    <h2>Fullstack JS junior developper</h2>
                </div>
                <div className="tech-slider-wrapper">
                    <div className="angular-logo-wrapper">
                        <Angular height={250} />
                    </div>
                    <div className="jira-logo-wrapper">
                        <Jira height={250} />
                    </div>
                    <div className="git-logo-wrapper">
                        <Git />
                    </div>
                    <div className="gitlab-logo-wrapper">
                        <Gitlab />
                    </div>
                    <div className="node-logo-wrapper">
                        <Node />
                    </div>
                    <div className="mongo-logo-wrapper">
                        <Mongo height={250} />
                    </div>
                    <div className="react-logo-wrapper">
                        <ReactLogo />
                    </div>
                    <div className="typescript-logo-wrapper">
                        <Typescript />
                    </div>
                </div>
            </div>
        </Page>
    );
});

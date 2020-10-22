import React from 'react'
import './project.scss'

const Project = (project = {}) => {
    return (
        <div className="project-container">
            <div className="img-wrapper">image du projet</div>
            <div className="desc-wrapper" >description rapide du projet a animer lors d'un hover/hold sur projet</div>
            <div className="tags-wrapper">
                <span>tag1</span>
                <span>tag2</span>
                <span>tag3</span>
                <span>tag4</span>
            </div>
        </div>
    );
};

export default Project;

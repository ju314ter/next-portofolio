import React, { useEffect } from 'react'
import './project.scss'

const Project = (projectData, key) => {

    const { project } = projectData

    useEffect(() => {
        // console.log(project)
        return () => {

        }
    }, [project])

    return (
        <div className="project-container">
            <div className="img-wrapper" style={{ background: `url('${project.illustrationPath}') no-repeat center`, backgroundSize: project.portrait ? 'contain' : 'cover' }}>
            </div>
            <div className="desc-wrapper" >
                <div className="titre">{project.projectName}</div>
                <div className="description">{project.description}</div>
            </div>
            <div className="tags-wrapper">
                {project.tags.map((tag, i) => {
                    return <div className="tag" key={tag + i}></div>
                })}
            </div>
        </div>
    );
};

export default Project;

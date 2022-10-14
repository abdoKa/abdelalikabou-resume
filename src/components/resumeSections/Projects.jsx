import React from 'react';

function Projects({title, projectName, description, link}) {
    return (
        <>
            <h1 className="section-title">{title}</h1>
            <div className="content">
                <p><strong>{projectName}</strong></p>
                <p>{description}</p>
                <a href={link}>{link}</a>

            </div>
        </>
    );
}

export default Projects;
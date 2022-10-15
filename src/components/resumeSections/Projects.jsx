import React from 'react';

function Projects({title, projects}) {
    return (
        <>
        <h1 className="section-title text-gradient">{title}</h1>
            <div className="flex flex-col items-start w-full">
                {projects && projects.map(({name, description, link}, index) =>
                    <div className="grow-1 content"
                         key={index}
                    >
                        <p><strong>{name}</strong></p>
                        <p>{description}</p>
                        <a href={link}>{link}</a>
                    </div>
                )}
            </div>
        </>
    );
}

export default Projects;
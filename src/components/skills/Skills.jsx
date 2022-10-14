import React from 'react';

function Skills({title, languages, libraries_and_frameworks, tools}) {
    return (
        <>
            <h1 className="section-title">{title}</h1>
            <div className="content">
                <p><strong>LANGUAGES: </strong> {languages}</p>
                <p><strong>LIBRARIES & FRAMEWORKS:</strong> {libraries_and_frameworks}</p>
                <p><strong>TOOLS:</strong> {tools}</p>
            </div>
        </>
    );
}

export default Skills;
import React from 'react';

function Skills({title, languages, libraries_and_frameworks, tools}) {
    return (
        <>
        <h1 className="section-title text-gradient">{title}</h1>
            <div className="w-full">
                <div className="content">
                    <p><strong>LANGUAGES: </strong> <span className="font-light text-gray-700">{languages}</span></p>
                    <p><strong>LIBRARIES & FRAMEWORKS:</strong> <span className="font-light text-gray-700">{libraries_and_frameworks}</span></p>
                    <p><strong>TOOLS:</strong> <span className="font-light text-gray-700">{tools}</span></p>
                </div>
            </div>
        </>
    );
}

export default Skills;
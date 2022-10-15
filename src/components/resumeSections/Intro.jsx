import React from 'react';

function Intro({title, firstParagraph, secondParagraph, JopPls}) {
    return (
        <>
        <h1 className="section-title text-gradient">{title}</h1>
            <div className="w-full">
                <div className="content">
                    <p>{firstParagraph}</p>
                    <p>{secondParagraph}</p>
                    <p className="job-pls">{JopPls}</p>
                </div>
            </div>
        </>
    );
}

export default Intro;
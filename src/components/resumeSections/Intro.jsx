import React from 'react';

function Intro({title, firstParagraph, secondParagraph, JopPls}) {
    return (
        <>
            <h1 className="section-title">{title}</h1>
            <div className="w-full content">
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
                <p>{JopPls}</p>
            </div>
        </>
    );
}

export default Intro;
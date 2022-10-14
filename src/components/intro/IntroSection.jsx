import React from 'react';

function IntroSection({title, firstParagraph, secondParagraph, JopPls}) {
    return (
        <>
            <h1 className="section-title">{title}</h1>
            <div className="content">
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
                <p>{JopPls}</p>
            </div>
        </>
    );
}

export default IntroSection;
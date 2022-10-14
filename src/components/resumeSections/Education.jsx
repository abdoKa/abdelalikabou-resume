import React from 'react';

function Education({title, educationTitle, schoolName, startAt, endAt}) {
    return (
        <>
            <h1 className="section-title">{title}</h1>
            <div className="content">
                <p><strong>{educationTitle}</strong></p>
                <p><strong>{schoolName}</strong></p>
                <p className="start-end-date"><strong>{startAt}</strong> - <strong>{endAt}</strong></p>

            </div>
        </>
    );
}

export default Education;
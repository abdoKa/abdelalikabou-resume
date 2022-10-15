import React from 'react';

function Education({title, educations}) {
    return (
        <>
            <h1 className="section-title">{title}</h1>
            <div className="w-full">
                {educations && educations.map(({title, school_name, start_at, end_at}, index) =>
                    <div className="grow-1 content"
                         key={index}
                    >
                        <p><strong>{title}</strong></p>
                        <p>{school_name}</p>
                        <p className="start-end-date"><strong>{start_at}</strong> - <strong>{end_at}</strong></p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Education;
import React from 'react';

function Experiences({title, experiences}) {
    return (
        <>
        <h1 className="section-title text-gradient">{title}</h1>
            <div className="w-full">
                {experiences && experiences.map(({company, job_title, start_at, end_at}, index) =>
                    <div className="grow-1 content"
                         key={index}
                    >
                        <p className="font-bold">{company}</p>
                        <p className="font-bold italic">{job_title}</p>
                        <p className="start-end-date"><strong>{start_at}</strong> - <strong>{end_at}</strong></p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Experiences;
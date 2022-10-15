import React from 'react';

function Education({title, educations}) {
    return (
        <>
        <h1 className="text-gradient section-title">{title}</h1>
        <div className="w-full divide-y divide-dashed">
                {educations && educations.map(({title, school_name, start_at, end_at}, index) =>
                    <div className="grow-1 content py-2"
                         key={index}
                    >
                        <p className="font-bold ">{title}</p>
                        <p className="italic font-bold text-gray-700 ">{school_name}</p>
                        <p className="start-end-date"><strong>{start_at}</strong> - <strong>{end_at}</strong></p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Education;
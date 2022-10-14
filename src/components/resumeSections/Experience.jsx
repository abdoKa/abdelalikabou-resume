import React from 'react';

function Experience({title,company,jobTitle,startAt,endAt}) {
    return (
          <>
            <h1 className="section-title">{title}</h1>
            <div className="content">
                <p><strong>{company}</strong></p>
                <p><strong>{jobTitle}</strong></p>
                <p className="start-end-date"><strong>{startAt}</strong> - <strong>{endAt}</strong></p>

            </div>
          </>
  );}

export default Experience;
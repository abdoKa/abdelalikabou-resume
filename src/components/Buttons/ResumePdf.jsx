import React from 'react';

function ResumePdf({link, label}) {
    return (
            <a className="resume-link" href={link}><span className="text-gradient">{label}</span></a>
    );
}

export default ResumePdf;
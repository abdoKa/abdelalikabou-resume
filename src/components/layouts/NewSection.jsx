import React from 'react';

function NewSection({children}) {
    return (
        <section className="section-container">
            {children}
        </section>
    );
}

export default NewSection;
import React from 'react';

const SectionTitle = (heading, subHeading) => {
    return (
        <div className='text-center'>
            <h1 className="text-3xl font-semibold">{heading}</h1>
            <p className="">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;
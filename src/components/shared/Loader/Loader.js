import React from 'react';

export const Loader = () => {
    return(
        <div className='text-center ' >
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};
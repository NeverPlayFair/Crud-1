import React from 'react';


const Worker = (props) => {

    // albo zepsułem wywołanie
    
    const { text } = props.worker;

    return (
        <div>
            <p>
                <strong>{text}</strong>
            </p>
        </div>
    );
}

export default Worker;

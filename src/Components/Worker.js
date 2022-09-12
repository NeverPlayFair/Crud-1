import React from 'react';


const Worker = (props) => {

    const { Name, Surname, id } = props.worker;
    // console.log(worker, props);
    return (
        <div key={props.key}>

            <p>
                <span>{Name}</span> <span>{Surname}</span>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
    );
}


export default Worker;


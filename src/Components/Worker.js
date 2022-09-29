import React from 'react';




const Worker = (props) => {

    const { name, surname, id, changeEditMode } = props.worker;
    // console.log(worker, props);


    return (
        <div key={props.key}>

            <p>
                <span>{name}</span> <span>{surname}</span>
                <button onClick={() => props.delete(id)}>X</button>
                <button onClick={() => props.change(changeEditMode)} >Edit</button>
            </p>
        </div>
    );
}


export default Worker;


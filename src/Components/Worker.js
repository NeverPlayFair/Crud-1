import React from 'react';



const Worker = (props) => {

    const { name, surname, id } = props.worker;
    console.log(props);


    return (
        <div key={props.key}>

            <p>
                <span>{name}</span> <span>{surname}</span>
                <button onClick={() => props.delete(id)}>X</button>
                <button onClick={() => props.changeEditMode(name, surname)} >Edit</button>
            </p>
        </div>
    );
}


export default Worker;


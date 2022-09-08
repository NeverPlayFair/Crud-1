import React from 'react';
import Worker from './Worker';

const ListWorker = (props) => {

    const Workers = props.worker.map(worker => <Worker key={Worker.id} worker={worker} />)

    return (
        <>
            <div className='1st'>
                <h3>Worker List</h3>
                {Workers}
            </div>
        </>

    );
}

export default ListWorker;

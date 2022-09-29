import React, { Component } from 'react';
import './AddWorker.css';


class AddWorker extends Component {
    state = {
        name: '',
        surname: ""
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log("add");
        const { name, surname } = this.state;
        const add = this.props.add(name, surname)
        if (add) {
            this.setState({
                name: "",
                surname: ""
            })
        }
    }

    handleInputChange = (e) => {

        const userInput = e?.target?.value.split(" ")

        if (userInput[0].length && userInput[1].length) {
            this.setState({
                name: userInput[0],
                surname: userInput[1]
            })
        }

    }

    changeEditMode = (id) => {
        const changedWorker = this.state.worker.filter(worker => worker.id !== id);

        const selectedWorker = this.state.worker.find(worker => worker.id === id);

        this.setState({
            worker: changedWorker,
            name: selectedWorker.name,
            surname: selectedWorker.name
        })


    }


    render() {
        console.log(this.handleInputChange && this.changeEditMode)
        return (


            <form className="add" onSubmit={this.handleClick}>
                <label htmlFor="worker">Add worker:
                </label>
                <input type="text" placeholder="Name and Surname" id="worker"
                    defaultValue={this.state.name + this.state.surname} onChange={() => { this.handleInputChange(); this.changeEditMode() }}
                />
                <button>Add</button>
                <hr />
            </form>


        );
    }
}

export default AddWorker;
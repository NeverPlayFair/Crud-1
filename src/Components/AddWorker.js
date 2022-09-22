import React, { Component } from 'react';
import './AddWorker.css';


class AddWorker extends Component {
    state = {
        name: '',
        surname: ""
    }

    handleClick = () => {
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


    render() {
        return (


            <form className="add" onSubmit={this.handleClick}>
                <label htmlFor="worker">Add worker:
                </label>
                <input type="text" placeholder="Name and Surname" id="worker"
                    defaultValue={this.state.name + this.state.surname} />
                <button>Add</button>
                <hr />
            </form>


        );
    }
}

export default AddWorker;
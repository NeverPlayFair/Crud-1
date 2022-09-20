import React, { Component } from 'react';
import './AddWorker.css';


class AddWorker extends Component {
    state = {
        Name: '',
        Surname: ""
    }

    handleClick = () => {
        console.log("add");
        const { Name, Surname } = this.state
        const add = this.props.add(Name, Surname)
        if (add) {
            this.setState({
                Name: "",
                Surname: ""
            })
        }
    }


    render() {
        return (
            <div
                className="add">
                <input type="text" placeholder="add worker" value={this.state.text} />
                <button>Add</button>

                <hr />

            </div>
        );
    }
}

export default AddWorker;
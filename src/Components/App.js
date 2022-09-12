import React, { Component } from 'react';
import AddWorker from './AddWorker';
import './App.css';
import ListWorker from './ListWorker';

class App extends Component {

  state = {
    worker: [
      {
        id: 0,
        Name: "John",
        Surname: "Test",
        BirthDate: "10.01.2022",
        Position: "CTO",
        Location: "USA"

      },
      {
        id: 1,
        Name: "Paweł",
        Surname: "Gawron",
        BirthDate: "12.02.2022",
        Position: "Programmer",
        Location: "Poland"

      },
      {
        id: 2,
        Name: "Nada",
        Surname: "Martins",
        BirthDate: "14.03.2022",
        Position: "HR",
        Location: "Italy"

      },
      {
        id: 3,
        Name: "Ellena",
        Surname: "Cobb",
        BirthDate: "20.04.2022",
        Position: "HELPER",
        Location: "Portugal"

      },
    ]
  }

  deleteTask = (id) => {
    console.log("delete" + id);
  }

  changeTaskStatus = () => {
    console.log("change");
  }


  render() {


    return (
      <div className="App">

        IT group Workers
        <AddWorker />
        <ListWorker worker={this.state.worker} delete={this.deleteTask} change={this.changeTaskStatus} />


      </div>
    );
  }
}

export default App;

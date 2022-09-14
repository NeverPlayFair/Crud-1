import React, { Component } from 'react';
import AddWorker from './AddWorker';
import './App.css';
import ListWorker from './ListWorker';

class App extends Component {
  counter = 4;
  state = {
    worker: [
      {
        id: 0,
        Name: "John",
        Surname: "Test",
        BirthDate: "10.01.2022",
        Position: "CTO",
        Location: "USA",
        active: true


      },
      {
        id: 1,
        Name: "Paweł",
        Surname: "Gawron",
        BirthDate: "12.02.2022",
        Position: "Programmer",
        Location: "Poland",
        active: true


      },
      {
        id: 2,
        Name: "Nada",
        Surname: "Martins",
        BirthDate: "14.03.2022",
        Position: "HR",
        Location: "Italy",
        active: true


      },
      {
        id: 3,
        Name: "Ellena",
        Surname: "Cobb",
        BirthDate: "20.04.2022",
        Position: "HELPER",
        Location: "Portugal",
        active: true

      },
    ]
  }



  deleteTask = (id) => {
    console.log("delete id " + id);
    let worker = [...this.state.worker];
    worker = worker.filter(worker => worker.id !== id)

    this.setState({
      worker
    })

  }


  EditWorker = (Name, Surname) => {
    console.log("edit element on id:" + Name + Surname);
    const edit = [...this.state.worker];
    const numberTwo = edit.findIndex(worker => worker.Name && worker.Surname === Name && Surname);
    edit.forEach(numberTwo, 1);
    console.log(edit);

    this.setState({
      Name: Name,
      Surname: Surname
    })
  }

  AddWorker = (Name, Surname) => {
    // console.log("Added worker");
    const workers = {
      id: this.counter,
      Name: Name,
      Surname: Surname,
      BirthDate: "10.01.2022",
      Position: "CTO",
      Location: "USA",
      active: true
    }
    this.counter++
    console.log(workers, this.counter)

    this.setState(prevState => ({
      worker: [...prevState.worker, workers]
    }))

    return true
  }

  render() {


    return (
      <div className="App">

        IT group Workers
        {/* <EditWorker edit={this.EditWorker} /> */}
        <AddWorker add={this.AddWorker} />
        <AddWorker />
        <ListWorker worker={this.state.worker} delete={this.deleteTask} change={this.changeTaskStatus} />


      </div>
    );
  }
}

export default App;

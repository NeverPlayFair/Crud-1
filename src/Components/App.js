import React, { Component } from 'react';
import AddWorker from './AddWorker';

import ListWorker from './ListWorker';


class App extends Component {

  state = {
    counter: 4,
    worker: [
      {
        id: 0,
        name: "John",
        surname: "Test",
        birthdate: "10.01.2022",
        position: "CTO",
        location: "USA",
        active: true


      },
      {
        id: 1,
        name: "Paweł",
        surname: "Gawron",
        birthdate: "12.02.2022",
        position: "Programmer",
        location: "Poland",
        active: true


      },
      {
        id: 2,
        name: "Nada",
        surname: "Martins",
        birthdate: "14.03.2022",
        position: "HR",
        location: "Italy",
        active: true


      },
      {
        id: 3,
        name: "Ellena",
        surname: "Cobb",
        birthdate: "20.04.2022",
        position: "HELPER",
        location: "Portugal",
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


  editWorker = (name, surname) => {
    console.log("edit element on id:" + name + surname);
    const edit = [...this.state.worker];
    const numberTwo = edit.findIndex(worker => worker.name && worker.surname === name && surname);
    edit.forEach(numberTwo, 1);
    console.log(edit);

    this.setState({
      Name: name,
      Surname: surname
    })
  }

  addWorker = (name, surname) => {
    // console.log("Added worker");
    const workers = {
      id: this.counter,
      name: name,
      surname: surname,
      birthdate: "10.01.2022",
      position: "CTO",
      location: "USA",
      active: true
    }

    this.setState({
      counter: this.state.counter + 1
    })
    console.log(workers, this.counter)

    const currentWorkers = this.state.worker
    currentWorkers.push(workers)

    this.setState(prevState => ({
      worker: currentWorkers
    }))

    return true
  }

  render() {


    return (
      <div className="App">

        IT group Workers
        <hr />
        {/* <editWorker edit={this.editWorker} /> */}
        {/* <AddWorker add={this.AddWorker} /> */}
        <AddWorker add={this.addWorker} />
        <ListWorker worker={this.state.worker} delete={this.deleteTask} change={this.changeTaskStatus} />


      </div>
    );
  }
}

export default App;
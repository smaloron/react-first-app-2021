import './App.css';
import React from 'react';

function TextField(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" value={props.value} onChange={props.changeHandler} />
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Martin',
      firstName: 'Sophie',
      age: 39,
    };
  }
  clickHandler = () => {
    alert('Hello ' + this.state.firstName);
  };

  handleFirstNameChange = even => {
    this.setState({ firstName: even.target.value });
  };

  render() {
    return (
      <div className="App">
        <TextField
          label="Prénom"
          value={this.state.firstName}
          changeHandler={this.handleFirstNameChange}
        />

        <button type="button" onClick={this.clickHandler}>
          Valider
        </button>
      </div>
    );
  }
}

export default App;

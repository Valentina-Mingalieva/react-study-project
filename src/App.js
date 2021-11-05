import React from 'react';
import './App.css';

import { Button } from './Components/Button/Button';
import Card from './Components/Card/Card';
import Form from './Components/Form/Form';

const teachers = [
  { id: '1', name: 'Nataly' },
  { id: '2', name: 'Alexei' },
  { id: '3', name: 'Andrei' },
];

class App extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => {
    console.log('e.target.value', e.target.value);
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Form />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {teachers.map(teacher => (
          <Card key={teacher.id} id={teacher.id} name={teacher.name} />
        ))}
        <Button name="Add teacher" />
      </div>
    );
  }
}

export default App;

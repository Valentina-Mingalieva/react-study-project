import { Component } from 'react';
import Input from './Input';
import { Button } from '../Button/Button';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    surname: '',
    patronymic: '',
    description: '',
  };

  handleChange = ({ value, name }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('state', this.state);
  };

  render() {
    const { name, surname, patronymic, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="name"
          labelName="name"
          value={name}
          onChange={this.handleChange}
        />
        <Input
          name="surname"
          labelName="surname"
          value={surname}
          onChange={this.handleChange}
        />
        <Input
          name="patronymic"
          labelName="patronymic"
          value={patronymic}
          onChange={this.handleChange}
        />
        <Input
          type="textarea"
          name="description"
          labelName="description"
          value={description}
          onChange={this.handleChange}
        />

        <Button name="Add teacher" />
      </form>
    );
  }
}

export default Form;

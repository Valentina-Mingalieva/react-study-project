import { Component } from 'react';
import s from './Form.module.css';

class Input extends Component {
  static defaultProps = {
    type: 'input',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.props.onChange({ value, name });
  };

  render() {
    const { labelName, name, value, type } = this.props;

    return (
      <label>
        {labelName}
        {type === 'input' ? (
          <input
            name={name}
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        ) : (
          <textarea name={name} value={value} onChange={this.handleChange} />
        )}
      </label>
    );
  }
}

export default Input;

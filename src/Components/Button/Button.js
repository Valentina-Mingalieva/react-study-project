import { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  render() {
    const { name, type } = this.props;

    return (
      <button type={type} className={s.base} onClick={this.handleAdd}>
        {name}
      </button>
    );
  }
}

Button.defaultProps = {
  name: 'Add',
};

export { Button };

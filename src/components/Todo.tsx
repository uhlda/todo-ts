import * as React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './types';

class TodoForm extends React.Component<Todo, {}> {
  render() {
    const { onClick, completed, text } = this.props;
    return(
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    );
  }
}

// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// };

export default TodoForm;

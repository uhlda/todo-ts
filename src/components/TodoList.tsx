import * as React from 'react';
import PropTypes from 'prop-types';
import TodoForm from './Todo';
import { Props } from '../containers/VisibleTodoList';

export class TodoList extends React.Component<Props, {}> {
  render() {
  const { todos, onTodoClick } = this.props;
  return(
    <ul>
      {todos.map(todo => (
        <TodoForm
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      ))}
     </ul>
    );
  }
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// };

export default TodoList;

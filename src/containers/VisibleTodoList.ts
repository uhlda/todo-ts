import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { Todo } from '../components/types';
import TodoList from '../components/TodoList';
import { Action } from '../components/types';

interface StateFromProps {
  todos: Todo[];
  filter: string;
} 

interface DispatchFromProps {
  onTodoClick: (id: number) => Action;
}

export interface Props extends StateFromProps, DispatchFromProps {}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  filter: state.visibilityFilter
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

// tslint:disable-next-line:no-any
const VisibleTodoList: any = connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: true }
)(TodoList);

export default VisibleTodoList;

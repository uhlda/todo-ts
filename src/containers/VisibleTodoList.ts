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
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter),
    filter: ownProps.filter
    // previously was getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

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
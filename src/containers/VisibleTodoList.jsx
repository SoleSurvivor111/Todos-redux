import { connect } from 'react-redux';
import { toggleTodo } from 'actions';
import Main from 'Components/Main/Main';
import { VisibilityFilters } from 'actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(task => !task.checked);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(task => task.checked);
    default:
      throw new Error(`Uncnown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

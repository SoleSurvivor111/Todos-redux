import { connect } from 'react-redux';
import Main from 'Components/Main/Main';
import { VisibilityFilters } from 'const';

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


export default connect(mapStateToProps)(Main);

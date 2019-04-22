import App from 'Components/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';
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

const searchFilter = (todos, searchField) => {
  const filteredList = todos.filter(task => task.text.includes(searchField));
  return filteredList;
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const mapStateToProps = state => ({
  visibleTodoList: getVisibleTodos(
    searchFilter(state.todos, state.searchField), state.visibilityFilter,
  ),
  editButtonStates: state.editButtonStates,
  all: state.todos.length,
  active: state.todos.filter(task => !task.checked).length,
  completed: state.todos.filter(task => task.checked).length,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

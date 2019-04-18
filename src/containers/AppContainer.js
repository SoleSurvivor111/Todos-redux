import App from 'Components/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';
import { VisibilityFilters, ENTER_KEY, ESCAPE_KEY } from 'const';

const addTask = (e, addTodo) => {
  if ((e.target.value.trim() !== '')
  && (e.which === ENTER_KEY || e.keyCode === ENTER_KEY)) {
    addTodo(e.target.value);
    e.target.value = '';
  }
};

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

export const blurDelEditInput = (e, task, changeValue, deleteEditInput) => {
  changeValue(task.id, e.target.value);
  deleteEditInput(task.id);
};


export const keysDelEditInput = (e, task, changeValue, deleteEditInput, deleteTodo) => {
  if (e.which === ENTER_KEY
    || e.keyCode === ENTER_KEY) {
    if (e.target.value.trim() === '') {
      deleteTodo(task.id);
      return;
    }
    changeValue(task.id, e.target.value);
    deleteEditInput(task.id);
  } else if (e.which === ESCAPE_KEY) {
    deleteEditInput(task.id);
  }
};
const searchFilter = (todos, searchField) => {
  const filteredList = todos.filter(task => task.text.includes(searchField));
  return filteredList;
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
  addTask,
  blurDelEditInput,
  keysDelEditInput,
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

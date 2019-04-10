import { combineReducers } from 'redux';
import todos from 'reducers/todos';
import visibilityFilter from 'reducers/visibilityFilter';
import editButtonStates from 'reducers/editButtonStates';
import searchField from 'reducers/searchField';

export default combineReducers({
  searchField,
  todos,
  visibilityFilter,
  editButtonStates,
});

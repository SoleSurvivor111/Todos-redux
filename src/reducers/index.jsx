import { combineReducers } from 'redux';
import todos from 'reducers/todos';
import visibilityFilter from 'reducers/visibilityFilter';
import editButtonStates from 'reducers/editButtonStates';

export default combineReducers({
  todos,
  visibilityFilter,
  editButtonStates,
});

import { connect } from 'react-redux';
import * as actions from 'actions/mainActions';
import Task from 'Components/Main/Task';

export const blurDelEditInput = (e, task, changeValue, deleteEditInput) => {
  changeValue(task.id, e.target.value);
  deleteEditInput(task.id);
};

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;
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

const mapStateToProps = state => ({
  editButtonStates: state.editButtonStates,
});


export default connect(mapStateToProps, actions)(Task);

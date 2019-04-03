const editButtonStates = (state = { id: '', text: '' }, action) => {
  switch (action.type) {
    case 'ADD_EDIT_INPUT':
      return {
        id: action.id,
        text: action.text,
      };
    case 'DELETE_EDIT_INPUT':
      return {
        id: '',
        text: '',
      };
    default:
      return state;
  }
};

export default editButtonStates;

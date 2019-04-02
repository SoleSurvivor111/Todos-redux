const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          checked: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(task => ((task.id === action.id)
        ? { ...task, checked: !task.checked }
        : task));
    default:
      return state;
  }
};
export default todos;

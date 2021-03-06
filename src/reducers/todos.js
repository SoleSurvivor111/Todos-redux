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
    case 'DELETE_TODO':
      return state.filter(task => (task.id !== action.id));
    case 'TOGGLE_TODO':
      return state.map(task => ((task.id === action.id)
        ? { ...task, checked: !task.checked }
        : task));
    case 'TOGGLE_ALL': {
      const completedTasks = state.filter(task => task.checked === true);
      const checked = state.length !== completedTasks.length;
      return state.map(task => ({
        ...task,
        checked,
      }));
    }
    case 'CHANGE_VALUE':
      if (action.text === '') {
        return state.filter(task => task.id !== action.id);
      }
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            text: action.text,
          };
        }
        return task;
      });
    case 'CLEAR_COMPLETED':
      return state.filter(task => !task.checked);
    default:
      return state;
  }
};
export default todos;

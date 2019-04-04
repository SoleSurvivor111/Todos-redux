const allLength = (todos) => todos.length;
const activeLength = (todos) => todos.length;
const completedLength = (todos) => todos.length;
const initialState = {
  todos: [],
  filters: {
    all: '',
    active: '',
    completed: '',
  },
};

const filter = (state = initialState, action) => {
  let all;
  let active;
  let completed;

  switch (action.type) {
    case 'ADD_TODO': {
      const newTask = {
        id: action.id,
        text: action.text,
        checked: false,
      };
      all = [
        ...state.todos,
        newTask,
      ];
      active = all.filter(task => !task.checked);
      completed = all.length - active.length;
      return {
        todos: all,
        filter: {
          all: all.length,
          active: active.length,
          completed,
        },
      };
    }

    case 'DELETE_TODO':
    all = state.todos.filter(task => (task.id !== action.id));
    all = state.todos.filter(task => (task.id !== action.id));
      return {
        todos:[...all],
        filter:
      },

    // case 'TOGGLE_TODO':
    //   return state.map(task => ((task.id === action.id)
    //     ? { ...task, checked: !task.checked }
    //     : task));
    // case 'TOGGLE_ALL': {
    //   const completedTasks = state.filter(task => task.checked === true);
    //   const checked = state.length !== completedTasks.length;
    //   return state.map(task => ({
    //     ...task,
    //     checked,
    //   }));
    // }

    default:
      return state;
  }
};
export default filter;

export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: Date.now(),
  checked: false,
});

export const toggleAll = () => ({
  type: 'TOGGLE_ALL',
});

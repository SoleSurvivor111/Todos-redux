export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const addEditInput = (id, text) => ({
  type: 'ADD_EDIT_INPUT',
  id,
  text,
});

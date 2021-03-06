import { v4 } from 'node-uuid';

export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: v4(),
  checked: false,
});

export const toggleAll = () => ({
  type: 'TOGGLE_ALL',
});

export const findTodo = e => ({
  type: 'FIND_TODO',
  text: e.target.value,
});

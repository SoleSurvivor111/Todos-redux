const searchField = (state = '', action) => {
  switch (action.type) {
    case 'FIND_TODO':
      return action.text;
    default:
      return state;
  }
};
export default searchField;

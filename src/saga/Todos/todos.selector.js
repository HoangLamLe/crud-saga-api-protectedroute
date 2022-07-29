export const todosSelector = (state) => {
  return state.todos.todoList;
};
export const loadingSelector = (state) => {
  return state.todos.loading;
};
export const sortSelector = (state) => state.todos.isSortSuccess;

export const currentPageSelector = (state) => state.todos.currentPage;

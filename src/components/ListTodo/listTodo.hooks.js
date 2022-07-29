/* eslint-disable react-hooks/rules-of-hooks */
import { tokenSelector } from "../../saga/Auth/auth.selector";
import {
  todosSelector,
  loadingSelector,
  currentPageSelector,
} from "../../saga/Todos/todos.selector";
import { useDispatch, useSelector } from "react-redux";
const listTodoHooks = () => {
  const dispatch = useDispatch();
  const listTodo = useSelector(todosSelector);
  const token = useSelector(tokenSelector);
  const loading = useSelector(loadingSelector);
  const currentPage = useSelector(currentPageSelector);
  return {
    dispatch,
    listTodo,
    token,
    loading,
    currentPage,
  };
};
export default listTodoHooks;

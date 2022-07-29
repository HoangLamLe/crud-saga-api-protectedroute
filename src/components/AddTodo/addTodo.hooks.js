/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "../../saga/Auth/auth.selector";
const addTodoHooks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  return {
    navigate,
    dispatch,
    token,
  };
};
export default addTodoHooks;

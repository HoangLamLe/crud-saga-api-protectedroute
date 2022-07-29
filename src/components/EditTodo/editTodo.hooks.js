/* eslint-disable react-hooks/rules-of-hooks */
import { tokenSelector, userIdSelector } from "../../saga/Auth/auth.selector";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const editTodoHooks = () => {
  const id = useParams().id;
  const name = useParams().name;
  const description = useParams().description;
  const token = useSelector(tokenSelector);
  const userID = useSelector(userIdSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return {
    id,
    name,
    description,
    token,
    userID,
    navigate,
    dispatch,
  };
};
export default editTodoHooks;

/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import {
  isLoginSelector,
  tokenSelector,
  userIdSelector,
} from "../../saga/Auth/auth.selector";
import { useDispatch, useSelector } from "react-redux";
const todoHooks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userID = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);
  const isLogin = useSelector(isLoginSelector);
  return {
    navigate,
    dispatch,
    userID,
    token,
    isLogin,
  };
};
export default todoHooks;

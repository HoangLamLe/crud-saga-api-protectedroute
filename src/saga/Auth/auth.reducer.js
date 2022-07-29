import * as Types from "./auth.type";
const initState = {
  token: "",
  userID: "",
  isLogin: false,
  isRegisterSuccess: false,
  loading: false,
  error: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.REGISTER_SUCCESS:
      return {
        ...state,
        isRegisterSuccess: true,
        loading: false,
      };
    case Types.REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        isRegisterSuccess: false,
        error: action.error,
      };
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userID: action.payload.id,
        isLogin: true,
        loading: false,
      };
    case Types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        isLogin: false,
      };
    case Types.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.LOGOUT_SUCCESS:
      return {
        ...state,
        token: "",
        isLogin: false,
        loading: false,
      };
    case Types.LOGOUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default authReducer;

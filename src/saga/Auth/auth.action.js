import * as Types from "./auth.type";

export const registerRequest = (params, callback, callback1) => ({
  type: Types.REGISTER_REQUEST,
  params,
  callback,
  callback1,
});
export const registerSuccess = () => ({ type: Types.REGISTER_SUCCESS });
export const registerFailure = (error) => ({
  type: Types.REGISTER_ERROR,
  error,
});

export const loginRequest = (params, callback, callback1) => ({
  type: Types.LOGIN_REQUEST,
  params,
  callback,
  callback1,
});
export const loginSuccess = (payload) => ({
  type: Types.LOGIN_SUCCESS,
  payload: payload,
});
export const loginFailure = (error) => ({ type: Types.LOGIN_ERROR, error });

export const logoutRequest = () => ({ type: Types.LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: Types.LOGOUT_SUCCESS });
export const logoutFailure = (error) => ({ type: Types.LOGOUT_ERROR, error });

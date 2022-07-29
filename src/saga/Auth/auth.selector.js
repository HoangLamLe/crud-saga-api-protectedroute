export const isLoginSelector = (state) => {
  return state.auths.isLogin;
};
export const isLoadingSelector = (state) => {
  return state.auths.loading;
};

export const tokenSelector = (state) => {
  return state.auths.token;
};
export const userIdSelector = (state) => {
  return state.auths.userID;
};

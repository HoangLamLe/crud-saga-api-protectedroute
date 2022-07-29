import { all } from "redux-saga/effects";
import { todosSaga } from "../saga/Todos/todos.saga";
import { authSaga } from "../saga/Auth/auth.saga";

export default function* rootSaga() {
  yield all([todosSaga(), authSaga()]);
}

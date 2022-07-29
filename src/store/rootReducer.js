import { combineReducers } from "redux";
import todosReducer from "../saga/Todos/todos.reducer";
import authReducer from "../saga/Auth/auth.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["todo"],
};

const todoPersistConfig = {
  key: "todo",
  storage: storage,
  blacklist: ["todolist"],
};
const authPersistConfig = {
  key: "auth",
  storage: storage,
  blacklist: ["auth"],
};
const rootReducer = () =>
  combineReducers({
    auths: persistReducer(authPersistConfig, authReducer),
    todos: persistReducer(todoPersistConfig, todosReducer),
  });

export default persistReducer(rootPersistConfig, rootReducer());

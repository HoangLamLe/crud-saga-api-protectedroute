import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/index.scss";

import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./router/PrivateRoutes";
import { Login, Register } from "./pages/public/authPage/authPages";
import { DashBoardPrivate, DashBoardPublic } from "./layouts/header";
import ListTodo from "./components/ListTodo/ListTodo.component";
import { AddTodo } from "./components";
import EditTodo from "./components/EditTodo/EditTodo";

const App = () => (
  <div className="App">
    <h1>Todo</h1>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/private" element={<DashBoardPrivate />}>
          <Route path="/todos" index element={<ListTodo />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/:id/:name/:description" element={<EditTodo />} />
        </Route>
      </Route>
      <Route path="/" element={<DashBoardPublic />} exact>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route
        path="*"
        element={
          <>
            <h1>NOT FOUND </h1>
          </>
        }
      />
    </Routes>
  </div>
);

export default App;

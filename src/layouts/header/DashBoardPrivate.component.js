import { Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../saga/Auth/auth.action";
const items = [
  {
    label: <Link to="/private/todos">TODOS</Link>,
    key: "private/todos",
  },
  {
    label: <Link to="/private/add">ADD NEW TODO</Link>,
    key: "/private/add",
  },
];
export default function HeaderPrivate() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="layout-header">
        <Menu
          className="main-menu"
          style={{ backgroundColor: "#FFF" }}
          mode="horizontal"
          items={[
            ...items,
            {
              label: (
                <p
                  onClick={() => {
                    dispatch(logoutRequest());
                    navigate("/login");
                  }}
                >
                  LOG OUT
                </p>
              ),
              key: "logout",
            },
          ]}
          selectedKeys={[location.pathname]}
        />
        public page
        <Outlet />
      </div>
    </>
  );
}

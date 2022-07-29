import { Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
const items = [
  {
    label: <Link to="/login">Login</Link>,
    key: "/login",
  },
  {
    label: <Link to="/register">Register</Link>,
    key: "/register",
  },
];
export default function HeaderPublic() {
  const location = useLocation();
  return (
    <>
      <div className="layout-header">
        Todo
        <Menu
          className="main-menu"
          style={{ backgroundColor: "#FFF" }}
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
        />
        <Outlet />
      </div>
    </>
  );
}

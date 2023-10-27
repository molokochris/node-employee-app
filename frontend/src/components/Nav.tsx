import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
const Nav = () => {
  const user = useContext<any>(AuthContext);
  const logOut = user[2];
  return (
    <div>
      <nav className="px-4 text-center space-y-4 bg-slate-900 flex flex-row py-10 items-center justify-center text-white">
        <ul className="flex flex-row gap-3">
          <li>
            <Link
              to="/admin/"
              className="text-center w-full block text-sm px-3 py-3"
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/admin/add/"
              className="text-center w-full block text-sm px-3 py-3"
            >
              Add Employee
            </Link>
          </li>

          <li>
            {" "}
            <button
              onClick={logOut}
              className="border text-center w-full block text-sm px-3 py-3"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;

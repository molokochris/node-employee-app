import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import EditEmployee from "./pages/Edit.tsx";
import AddEmployee from "./pages/Add.tsx";
import Employees from "./pages/Employees.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { AuthProvider } from "./hooks/AuthProvider.tsx";
import Nav from "./components/Nav.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: (
      <AuthProvider>
        <Nav />
      </AuthProvider>
    ),
    children: [
      {
        path: "/admin/",
        element: <Employees />,
      },
      {
        path: "/admin/add",
        element: <AddEmployee />,
      },
      {
        path: "/admin/edit/:employeeId",
        element: <EditEmployee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

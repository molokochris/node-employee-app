import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4 text-center space-y-4 bg-slate-900 flex flex-col py-10 items-center justify-center h-screen w-screen text-white">
      <h2 className="text-2xl font-bold">CodeTribe Employee Management App</h2>
      <div className="w-full lg:w-1/3 xl:w-1/3 flex flex-col space-y-3">
        <Link
          to="/admin/add"
          className="text-center w-full block text-sm px-3 py-3 bg-orange-400"
        >
          Add New Employee
        </Link>
        <Link
          to="/admin"
          className="text-center w-full block text-sm px-3 py-3 bg-slate-400"
        >
          View Employees
        </Link>
      </div>
    </div>
  );
};

export default Home;

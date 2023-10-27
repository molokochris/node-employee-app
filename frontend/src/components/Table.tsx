import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Employee } from "../api/services";

type TableTypes = {
  employees: Employee[];
  handleDelete: (id: string) => void;
};

const Table = forwardRef(function (
  { employees, handleDelete }: TableTypes,
  ref: any
) {
  return (
    <table className="text-xs md:text-base my-2 w-full border-separate border-spacing-y-3 border-spacing-x-0">
      <thead className="hidden xl:table-header-group  bg-slate-700  w-full text-center px-5 h-14">
        <tr className=" font-semibold">
          <th className=" font-bold text-s  m"></th>
          <th className=" font-bold text-sm">Employee id</th>
          <th className=" font-bold text-sm">First name</th>
          <th className=" font-bold text-sm">Last name</th>
          <th className=" font-bold text-sm">Phone</th>
          <th className=" font-bold text-sm">Email</th>
          <th className=" font-bold text-sm">Position</th>
          <th className=" font-bold text-sm">Action</th>
        </tr>
      </thead>
      <tbody
        ref={ref}
        className="text-center px-5  [&>*:nth-child(even)]:bg-slate-800"
      >
        {employees.length !== 0
          ? employees.map((employee) => (
              <tr
                className="transition-all delay-400 duration-700 h-10 hover:bg-slate-800 group relative"
                key={employee.id}
              >
                <td className="hidden text-center md:flex items-center flex-col">
                  <img
                    className="rounded-full w-12 first-letter:"
                    src={employee.image}
                    alt="avatar"
                  />
                </td>
                <td className="hidden md:table-cell">
                  {employee.id.slice(0, 10) + "..."}
                </td>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.position}</td>
                <td className="hidden lg:table-cell">
                  <div className="flex flex-row justify-center space-x-3">
                    <Link
                      to={"/edit/" + employee.id}
                      // onClick={() => handleEdit(employee.employeeId)}
                      className=" bg-green-600 px-3 py-1 text-xs group-hover:display"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(employee.id)}
                      className=" bg-red-600 px-3 py-1 text-xs  group-hover:display"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
});

export default Table;

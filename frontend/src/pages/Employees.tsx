import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import {
  Employee,
  deleteEmployee,
  getEmployees,
  searchEmployees,
} from "../api/services";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import useDebounce from "../hooks/debounce";
import { auth } from "../api/firebase";

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>("");
  const [token, setToken] = useState<any>();

  const handleSeachInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = await auth.currentUser?.getIdToken();
        console.log(token);
        if (!token) return;
        const employees = await getEmployees(token);
        setEmployees(employees.data);
      } catch (error) {
        setEmployees([]);
      }
    };

    fetchEmployees();
  }, []);

  // useEffect(() => {
  //   const fetchEmployees = async () => {
  //     try {
  //       const employees = await searchEmployees(search);
  //       setEmployees(employees);
  //     } catch (error) {
  //       setEmployees([]);
  //     }
  //   };

  //   search && fetchEmployees();
  // }, [debouncedValue]);

  const handleDeleteEmployee = async (employeeId: string) => {
    try {
      const token = await auth.currentUser?.getIdToken();
      console.log(token);
      if (!token) return;
      const response = await deleteEmployee(employeeId, token);
      // If successful, delete it from the UI
      if (response) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== employeeId)
        );
      }
    } catch (error) {
      alert("Failed to delete employee. Try again");
    }
  };

  return (
    <div className="relative bg-slate-900 flex flex-col py-10 items-center justify-center h-screen w-screen">
      <div className="w-full xl:w-2/3">
        <Link to="/admin" className="text-red-400 px-3 py-1 left-0">
          Go Back
        </Link>
        <div className="text-white w-full my-4 px-2 md:px-4 p-5 border border-slate-700 shadow ">
          <h3 className="font-semibold text-2xl text-white">Employees</h3>
          <SearchForm handleSearchEmployee={handleSeachInput} />
          <Table employees={employees} handleDelete={handleDeleteEmployee} />
        </div>
      </div>
    </div>
  );
};

export default Employees;

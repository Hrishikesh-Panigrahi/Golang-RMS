import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {
  const [Employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/employee/")
      .then((response) => {
        setEmployees(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading(false);
  }, []);

  // Todo: Add a loading spinner

  // todo: Add Delete employee functionality
  // todo: Add Search employee functionality

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Employee List</h1>
      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img
              src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
              className="rounded-full h-28 w-28"
            />
          </div>
        ) : (
          <>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Employee ID</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Designation</th>
                  <th className="py-3 px-6 text-left">Shift</th>
                  <th className="py-3 px-6 text-left">Salary</th>
                  <th className="py-3 px-6 text-left">Gender</th>
                </tr>
              </thead>
              <tbody>
                {Employees.map((employee, index) => (
                  <tr
                    key={employee.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-200`}
                  >
                    <td className="py-3 px-6 border-b border-gray-300">
                      <Link to={`${employee.id}`}>{employee.id}</Link>
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      {employee.name}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      {employee.designation}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      {employee.shift}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      {employee.salary}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      {employee.gender}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6">
              <Link
                to="/employee/recentlydeleted"
                className="text-blue-600 hover:text-blue-800 underline transition-colors duration-300"
              >
                Check recently deleted employees
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;

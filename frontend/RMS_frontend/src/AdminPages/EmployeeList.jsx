import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {
  const [Employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("/employee")
      .then((response) => {
        setEmployees(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Employee List</h1>
      <div className="overflow-x-auto">
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
                  <Link to={`/${employee.id}`}>{employee.id}</Link>
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
                  {employee.Gender}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;

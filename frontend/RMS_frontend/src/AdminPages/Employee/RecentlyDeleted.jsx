import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../../Components/SearchBar";

const RecentlyDeleted = () => {
  const [Employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/employee/recentlydeleted")
      .then((response) => {
        setEmployees(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading(false);
  }, []);


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Recently Deleted Employees
      </h1>

       <SearchBar
        api="/employee/permanatlydelete/"
        placeholder="Search for recently deleted employees"
       />

      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="mt-4 relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img
              src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
              className="rounded-full h-28 w-28"
            />
          </div>
        ) : (
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-6 text-left">
                  <input type="checkbox" />
                </th>
                <th className="py-3 px-6 text-left">Employee ID</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Designation</th>
                <th className="py-3 px-6 text-left">Shift</th>
                <th className="py-3 px-6 text-left">Salary</th>
                <th className="py-3 px-6 text-left">Gender</th>
                <th className="py-3 px-6 text-left">Restore?</th>
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
                    <input type="checkbox" />
                  </td>
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
                    {employee.gender}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => {
                        axios
                          .post(`/employee/restore/${employee.id}`)
                          .then((response) => {
                            console.log(response);
                            alert("Employee restored successfully");
                            window.location = "/employee";
                          })
                          .catch((error) => {
                            console.error(error);
                          });
                      }}
                    >
                      Restore
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RecentlyDeleted;

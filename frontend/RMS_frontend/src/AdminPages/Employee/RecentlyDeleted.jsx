import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

  const handleDeleteAll = () => {
    axios
      .delete("/employee/permanatlydelete")
      .then((response) => {
        console.log(response);
        alert("All employees deleted successfully");
        window.location = "/employee";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Recently Deleted Employees
      </h1>
      <div className="mb-4 flex justify-between items-center">
        <label
          style={{ minWidth: "50%" }}
          className="min-w-fit mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            placeholder="your keyword here"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
          <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
            <div className="relative">
              <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg
                  className="opacity-0 animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center transition-all opacity-1 valid:">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </div>
          </button>
        </label>

        <button
          onClick={handleDeleteAll}
          type="button"
          style={{ marginRight: "100px" }}
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Delete All
        </button>
      </div>

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

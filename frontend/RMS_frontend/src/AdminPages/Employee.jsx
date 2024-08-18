import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Employee = () => {
  const { id } = useParams();

  const [employee, setemployee] = useState(null);
  useEffect(() => {
    axios
      .get(`/employee/${id}`)
      .then((response) => {
        setemployee(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Employee Details
      </h1>
      {employee ? (
        <div>
          <p className="text-lg mb-4">
            <span className="font-semibold text-gray-700">ID:</span>{" "}
            {employee.id}
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold text-gray-700">Name:</span>{" "}
            {employee.name}
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold text-gray-700">Designation:</span>{" "}
            {employee.designation}
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold text-gray-700">Salary:</span>{" "}
            {employee.salary}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">Loading employee details...</p>
      )}
    </div>
  );
};

export default Employee;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Testing = () => {
  const [Employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("/employee")
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("Testing");
  }, []);
  return <div className="test">Testing</div>;
};

export default Testing;

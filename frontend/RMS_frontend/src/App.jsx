import React from "react";
import axios from "axios";
import EmployeeList from "./AdminPages/EmployeeList";
import Employee from "./AdminPages/Employee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BaseURL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/:id" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;

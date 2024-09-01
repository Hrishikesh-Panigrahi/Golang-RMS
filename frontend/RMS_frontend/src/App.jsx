import React from "react";
import axios from "axios";
import Index from "./AdminPages/Index/Index";
import EmployeeList from "./AdminPages/Employee/EmployeeList";
import Employee from "./AdminPages/Employee/Employee";
import CreateEmployee from "./AdminPages/Employee/CreateEmployee";
import RecentlyDeleted from "./AdminPages/Employee/RecentlyDeleted";
import CreateDish from "./AdminPages/Dish/CreateDish";
import Dishes from "./AdminPages/Dish/Dishes";
import ShowTables from "./ClientPages/ShowTables";
import CheckTable from "./ClientPages/CheckTable";
import BookTable from "./ClientPages/BookTable";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BaseURL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<Employee />} />
        <Route path="/employee/create" element={<CreateEmployee />} />
        <Route path="/employee/recentlydeleted" element={<RecentlyDeleted />} />
        <Route path="/dish/create" element={<CreateDish />} />
        <Route path="/dish" element={<Dishes />} />
        <Route path="/show" element={<ShowTables />} />
        <Route path="/check-table" element={<CheckTable />} />
        <Route path="/book-table" element={<BookTable />} />
      </Routes>
    </Router>
  );
}

export default App;

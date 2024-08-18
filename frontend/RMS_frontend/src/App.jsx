import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Testing from "./assets/Pages/Testing";

axios.defaults.baseURL = import.meta.env.VITE_BaseURL;

function App() {

    return (
     
      <Testing />

    );
  }

export default App;

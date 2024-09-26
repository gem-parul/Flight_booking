import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./shared/Components/Login/Login";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import "./App.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/all-flights" element={<Dashboard/>} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

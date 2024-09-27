import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./shared/Components/Login/Login";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import "./App.scss";
import NotFound from "./shared/Components/NotFound/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/all-flights" element={<ProtectedRoutes />}>
            <Route path="" element={<Dashboard />} /> 
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

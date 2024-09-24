import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import "./App.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/" element={<Home/>} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

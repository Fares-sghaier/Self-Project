import Home from "./components/Views/Home/Home.jsx";
import { Route, Routes, Navigate,browserHistory } from "react-router-dom";
import Signup from "./components/Views/Auth/Signup/Signup.jsx";
import Login from "./components/Views/Auth/Login/Login.jsx";
import React from "react";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes history={browserHistory}>
      {user && <Route path="/" exact element={<Home />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;

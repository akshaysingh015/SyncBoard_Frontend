import React from "react";
import Login from "./Components/login";
import Signup from "./Components/signup";
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/Form.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
    </Routes>
  );
};

export default App;

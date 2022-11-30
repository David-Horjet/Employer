import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
// import { Context } from "./context/Context";


function App() {
  // const {user} = useContext(Context);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/new" element={<AddEmployee/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

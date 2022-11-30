import React, { useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Dashboard from "./pages/Dashboard";
// import { Context } from "./context/Context";


function App() {
  // const {user} = useContext(Context);

  const handleFullScreen = useFullScreenHandle();
  const reportChange = useCallback((state, handle) => {
    if (handle === handleFullScreen) {
      console.log('Screen 1 went to', state, handle);
    }
  }, [handleFullScreen]);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard handleFullScreen={handleFullScreen} FullScreen={FullScreen} reportChange={reportChange}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

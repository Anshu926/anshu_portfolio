import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Universal from "./Universal.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Home Page */}
        <Route path="/" element={<Home />} />

        {/* WRONG URL — Show Universal Page */}
        <Route path="*" element={<Universal />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

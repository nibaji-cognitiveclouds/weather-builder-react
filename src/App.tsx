import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Countries from "./screens/Countries"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/country"} element={<Countries/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

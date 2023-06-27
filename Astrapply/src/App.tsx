import "./App.css";
import Home from "./pages/home";
import Dash from "./pages/dash";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dash" element={<Dash></Dash>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

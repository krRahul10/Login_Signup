import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Details from "./Components/Details";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

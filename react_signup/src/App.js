import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Details from "./Components/Details";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<ErrorPage />} />
        
      </Routes>
    </div>
  );
}

export default App;

import Home from "./home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./dashboard";
import './style.css';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    </div>
  );
}

export default App;
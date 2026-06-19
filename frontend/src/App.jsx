import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./pages/splash";
import Login from "./pages/login";
import Register from "./pages/register";
import AuthChoice from "./pages/auth";
import HomePage from "./pages/home";
import HealthRecord from "./pages/healthrecord";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Splash />} />
        <Route path="/auth" element={<AuthChoice />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/health-record" element={<HealthRecord />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
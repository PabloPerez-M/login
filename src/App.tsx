import React from "react";
import { ThemeProvider } from "./components/navbar/theme/Theme";
import Header from "./components/navbar/header/Header";
import { AuthProvider } from "./components/context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/welcome/Welcome";
import Login from "./components/login/Login";
import RegistrationForm from "./components/register/Register";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <div>
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<RegistrationForm />} />
                <Route path="/welcome" element={<WelcomePage />} />
              </Routes>
            </div>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
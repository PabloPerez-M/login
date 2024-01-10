import React from "react";
import { useTheme } from "../theme/Theme";
import "./button.css"

const ToggleButton: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();
  
    return (
      <div id="divBtn">

      <button id="btnTheme" onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
      </div>
    );
  };
  
  export default ToggleButton;
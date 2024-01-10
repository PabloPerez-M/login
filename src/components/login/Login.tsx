import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"


const Login: React.FC = () => {
    const { login, isAuthenticated, loginError } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = () => {
        login(username, password);
        if (loginError) {
            alert(loginError);
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/welcome');
        }
    }, [isAuthenticated, navigate]);

    // useEffect(() => {
    //     if(loginError){
    //         alert(loginError);
    //     }
    // }, [loginError]);

    return (
        <div className="loginContainer">
            <div className="login">
                <h2>Login</h2>
                <form>
                    <div className="formContainer">
                        <div className="username">
                            <label htmlFor="username">Usuario:</label><br />
                            <input type="text" id="username" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <br />
                        </div>
                        <div className="password">
                            <label htmlFor="password"> Contraseña:</label><br />
                            <input type="password" id="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="btnLogin">
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </form>

                <p><Link to="/registration">Registrarse</Link></p>
            </div>
        </div>

    );
}

export default Login;
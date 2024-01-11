import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "./register.css"

interface iUser {
    username: string;
    password: string;
}

const RegistrationForm: React.FC = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [users, setUsers] = useState<iUser[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const handleRegister = () => {
        if (username && password) {
            const newUser: iUser = { username, password };
            const updateUsers = [...users, newUser];

            setUsers(updateUsers);

            localStorage.setItem('users', JSON.stringify(updateUsers));

            login(username, password);

            setUsername('');
            setPassword('');

            navigate('/');
        }
    };

    return (
        <div className='registerContainer'>
            <div className="register">
                <h2>Registro</h2>
                <form>
                    <div className="formContainer">
                        <div className="username">
                            <label> Usuario:</label> <br />
                            <input type="text" id='username' placeholder='Usuario' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="password">
                            <label> Contraseña: </label><br />
                            <input type="password" id='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        </div>
                        <div className="btnRegister">
                            <button type="button" onClick={handleRegister}>Registrar</button>
                    </div>
                </form>
                <p><Link to="/">Volver al Login</Link></p>
            </div>
            {/* <div>
                    <h3>Usuarios registrados:</h3>
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>
                                {user.username} - {user.password}
                            </li>
                        ))}
                    </ul>
                </div> */}
        </div>
    );
};

export default RegistrationForm;

/* 
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
// if(loginError){
// alert(loginError);
// }
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
*/
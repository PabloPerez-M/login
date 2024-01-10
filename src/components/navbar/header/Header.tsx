import "./header.css"
import { ThemeProvider } from "../theme/Theme";
import ToggleButton from "../button/Button";


export default function Header() {
    return (
        <ThemeProvider>
            <header>
                <div id="header">
                    <nav>
                        <h1 id="logo">Logo</h1>
                        <li><ToggleButton /></li>
                    </nav>
                </div>
            </header>
        </ThemeProvider>
    );
}


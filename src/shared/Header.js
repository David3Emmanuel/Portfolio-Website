import { useEffect, useState } from "react";
import Link from "../UI/Link";
import Card from "./Card";

import "./Header.css";

export default function Header() {
    const [theme, setTheme] = useState(true);

    useEffect(() => {
        document.body.className = theme ? "light" : "dark"
    }, [theme])

    return <>
        <header>
            <Card className="center avatar">
                <img src="/avatar.png" alt="Me" />
                <h2 className="header-text">David Emmanuel</h2>
            </Card>
        </header>
        <nav>
            <ul>
                <li><Link to='/'><h3>HOME</h3></Link></li>
                <li><Link to='/projects'><h3>PROJECTS</h3></Link></li>
                <li><Link to='/blog'><h3>BLOG</h3></Link></li>
                {/* <li><Link><h3>LOG IN</h3></Link></li> */}
                <li><button className="clean" onClick={() => setTheme(prev => !prev)}><span className="material-icons">brightness_4</span></button></li>
            </ul>
        </nav>
    </>
}
// import { useEffect, useState } from "react";
import Link from "../UI/Link";
import Card from "./Card";

import "./Header.css";

export default function Header() {
    // const [theme, setTheme] = useState(false);

    // useEffect(() => {
    //     document.body.className = theme ? "light" : "dark"
    // }, [theme])

    return <>
        <header>
            <Link to="/"><Card className="center avatar">
                <img src="/avatar.jpg" alt="Me" />
                <h2 className="header-text">David Emmanuel</h2>
            </Card></Link>
        </header>
        <nav>
            <ul>
                <li><Link to='/' nav><h3>HOME</h3></Link></li>
                <li><Link to='/projects' nav><h3>PROJECTS</h3></Link></li>
                <li><Link to='/blog' nav><h3>BLOG</h3></Link></li>
                <li><Link to='/login' nav><h3>LOG IN</h3></Link></li>
                {/* <li><button className="clean" onClick={() => setTheme(prev => !prev)}><span className="material-icons">brightness_4</span></button></li> */}
            </ul>
        </nav>
    </>
}
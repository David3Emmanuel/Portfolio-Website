import Link from "../UI/Link";
import Card from "./Card";

import "./Header.css";

export default function Header() {
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
            </ul>
        </nav>
    </>
}
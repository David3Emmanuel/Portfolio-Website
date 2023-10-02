import { onAuthStateChanged } from "firebase/auth";
import Link from "../UI/Link";
import Card from "./Card";

import "./Header.css";
import { auth, db } from "../utils/firebase";
import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";

export default function Header() {
    const [username, setUsername] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                const userRef = ref(db, "users/" + user.uid);
                onValue(userRef, snapshot => {
                    setUsername(snapshot.val().username);
                })
            }
        });
    }, []);

    const [showMenu, setShowMenu] = useState(false);
    console.log("header");

    return <>
        <header>
            <Link to="/"><Card className="center avatar">
                <img src="/avatar.jpg" alt="Me" />
                <h2 className="header-text">David Emmanuel</h2>
            </Card></Link>
        </header>
        <nav className={showMenu ? "" : "hidden-nav"}>
            <li className="menu-btn"><span className="material-icons" onClick={() => setShowMenu(prev => !prev)}>menu</span></li>
            <ul onClick={() => setShowMenu(false)}>
                <li><Link to='/' nav><h3>HOME</h3></Link></li>
                <li><Link to='/projects' nav><h3>PROJECTS</h3></Link></li>
                <li><Link to='/blog' nav><h3>BLOG</h3></Link></li>
                {username === null && <li><Link to='/login' nav><h3>LOG IN</h3></Link></li>}
                {username !== null && <li className="username"><Link to='/'><h3>{username}</h3></Link></li>}
            </ul>
        </nav>
    </>
}